// B안(기존 인프라 통합형) 데이터 모델 - PoC 대상을 KT 기후쉼터 네트워크로 좁힘
// 아래 KT 지점 전부는 부산시 공식 우리동네 기후쉼터 목록(남구, busan.go.kr/depart/shelter02, 2025-10-01 갱신)에서 확인한 실주소입니다.
// category: 'shelter'(무더위쉼터, 공공/협약) | 'bank'(은행) | 'mart'(마트) | 'cvs'(CU 편의점) - 지금은 KT만 채움
const CATEGORY_META = {
  shelter: { label: "무더위쉼터", icon: "🏛️", color: "#2b6fd1" },
  bank:    { label: "은행",       icon: "🏦", color: "#1f8a4c" },
  mart:    { label: "마트",       icon: "🛒", color: "#e08b1f" },
  cvs:     { label: "CU 편의점",  icon: "🏪", color: "#c0392b" },
};

const BUSAN_SOURCE = "부산시 우리동네 기후쉼터 공식 목록 (busan.go.kr/depart/shelter02, 남구 검색, 2025-10-01 갱신)";

const PLACES = [
  { id: "kt-bukyung", category: "shelter", name: "KT 부경대직영점", address: "부산 남구 대연동 62-3번지 1층 일부", phone: "051-612-3086", hours: null, amenities: ["냉방", "의자"], source: "KT부산경남광역본부 부산시 우리동네 기후쉼터 협약 (2025-12-16 국제신문 보도, busan.go.kr/depart/shelter02)", verified: true },
  { id: "kt-royimobile-munhyeon", category: "shelter", name: "KT 로이모바일 문현점", address: "부산 남구 지게골로 24 (문현동)", phone: null, hours: null, amenities: ["냉방", "의자"], source: BUSAN_SOURCE, verified: true, note: "같은 주소에 카카오맵 등록명은 KT 미르 문현점(051-628-7666)으로 다르게 나옴 - 상호 변경 가능성 있어 확인 전까지 전화번호 보류" },
  { id: "kt-dh-gyeongsung", category: "shelter", name: "KT (주)디에이치커뮤니케이션 경성대점", address: "부산 남구 수영로 294 1층 제101호 (대연동, 동일스위트)", phone: "051-628-6722", hours: null, amenities: ["냉방", "의자"], source: BUSAN_SOURCE, verified: true },
  { id: "kt-narim-munhyeon", category: "shelter", name: "KT 나림 문현점", address: "부산 남구 수영로 25 (문현동)", phone: "051-891-1300", hours: "10:00 - 19:00 (월~토)", amenities: ["냉방", "의자"], source: BUSAN_SOURCE, verified: true },
  { id: "kt-cl-yongho2", category: "shelter", name: "KT 씨엘 용호2호점", address: "부산 남구 분포로 113 LG메트로2 상가 1층 (용호동, 엘지메트로시티아파트)", phone: "051-621-6010", hours: "10:00 - 20:00 (점심시간 12:00-13:00 제외)", amenities: ["냉방", "의자"], source: BUSAN_SOURCE, verified: true },
  { id: "kt-cl-gyeongsung", category: "shelter", name: "KT 씨엘 경성대점", address: "부산 남구 수영로 312 55동 121호 1센추리빌딩 201호 (대연동, 21센츄리시티오피스텔)", phone: "051-610-0500", hours: null, amenities: ["냉방", "의자"], source: BUSAN_SOURCE, verified: true },
  { id: "kt-alpha-daeyeon", category: "shelter", name: "KT (주)알파모바일 대연점", address: "부산 남구 수영로208번길 54 1층 (대연동)", phone: "051-525-9656", hours: null, amenities: ["냉방", "의자"], source: BUSAN_SOURCE, verified: true },
  { id: "kt-daesung-daeyeon", category: "shelter", name: "KT (주)대성정공 대연점", address: "부산 남구 못골로 69-1 1층 (대연동)", phone: null, hours: null, amenities: ["냉방", "의자"], source: BUSAN_SOURCE, verified: true, note: "카카오맵에 이 주소로 등록된 매장이 없음 - 폐업했거나 상호 변경 가능성, 현장 확인 필요" },
  { id: "kt-thew-gyeongsung", category: "shelter", name: "KT (주)더블유 경성대점", address: "부산 남구 용소로 8 1층 KT대리점 (대연동, 대영빌딩)", phone: "051-621-9441", hours: null, amenities: ["냉방", "의자"], source: BUSAN_SOURCE, verified: true },
  { id: "kt-cl-yongho", category: "shelter", name: "KT 씨엘 용호점", address: "부산 남구 동명로 139 (용호동)", phone: "051-622-7577", hours: null, amenities: ["냉방", "의자"], source: BUSAN_SOURCE, verified: true },
];

const CATEGORY_TOTAL_KNOWN = 10;
