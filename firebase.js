// Firebase 초기화 + 공용 헬퍼 (B안: 기존 인프라 통합형 — 무더위쉼터/은행/마트/편의점 지도 + 길찾기 클릭 로그 + 만족도)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getFirestore, collection, doc, getDocs, setDoc, addDoc,
  query, where, onSnapshot, serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const isConfigured = firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("여기에");

let app, db;
if (isConfigured) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export const firebaseReady = isConfigured;

// ---- places (무더위쉼터/은행/마트/편의점 통합 목록) --------------------
export async function fetchPlaces() {
  if (!isConfigured) return null; // 호출부에서 data.js의 예시 데이터로 폴백
  const snap = await getDocs(collection(db, "places"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Firestore가 비어있을 때 최초 1회 예시/실데이터를 밀어넣는 시드 함수 (seed.html에서 사용)
export async function seedPlaces(places) {
  if (!isConfigured) throw new Error("firebase-config.js에 설정값을 먼저 채워주세요.");
  for (const p of places) {
    const { id, ...rest } = p;
    await setDoc(doc(db, "places", id), rest);
  }
}

// ---- 이용 데이터: "길찾기" 클릭 + 도착 후 1문항 만족도 -----------------
// NFC 체크인 대신, 기존 시설에는 손댈 수 없으므로 "길찾기 클릭"을 이용 시도의 대리 지표로 삼는다.
function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

// 같은 기기 + 같은 장소 + 같은 날짜 = 하루 1회만 "인정" (중복 클릭 방지, 기존 구축모델의 원칙을 그대로 계승)
export async function hasVisitedToday(placeId, deviceId) {
  if (!isConfigured) return false;
  const q = query(
    collection(db, "visits"),
    where("placeId", "==", placeId),
    where("deviceId", "==", deviceId),
    where("dateKey", "==", todayKey()),
    where("counted", "==", true),
  );
  const snap = await getDocs(q);
  return !snap.empty;
}

// 길찾기 버튼 클릭 시 호출 — "이용 시도" 1건 기록
export async function logVisitClick({ placeId, deviceId }) {
  if (!isConfigured) return { counted: true, offline: true };
  const already = await hasVisitedToday(placeId, deviceId);
  const counted = !already;
  const ref = await addDoc(collection(db, "visits"), {
    placeId, deviceId, counted,
    dateKey: todayKey(),
    satisfaction: null, // 나중에 feedback.html에서 채움
    ts: serverTimestamp(),
  });
  return { counted, offline: false, visitId: ref.id };
}

// feedback.html에서 만족도(1~5)를 별도 문서로 기록 (visits와는 placeId+deviceId+dateKey로 느슨하게 연결)
export async function addSatisfaction({ placeId, deviceId, score }) {
  if (!isConfigured) return { offline: true };
  await addDoc(collection(db, "feedback"), {
    placeId, deviceId, score,
    dateKey: todayKey(),
    ts: serverTimestamp(),
  });
  return { offline: false };
}

// 대시보드 실시간 구독 — 오늘자 visits 전체
export function listenTodayVisits(callback) {
  if (!isConfigured) return () => {};
  const q = query(collection(db, "visits"), where("dateKey", "==", todayKey()));
  return onSnapshot(q, snap => callback(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
}

// 대시보드 실시간 구독 — 오늘자 feedback 전체
export function listenTodayFeedback(callback) {
  if (!isConfigured) return () => {};
  const q = query(collection(db, "feedback"), where("dateKey", "==", todayKey()));
  return onSnapshot(q, snap => callback(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
}
