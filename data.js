// B안(기존 인프라 통합형) 데이터 모델
// category: 'shelter'(무더위쉼터, 공공) | 'bank'(은행) | 'mart'(마트) | 'cvs'(CU 편의점)
const CATEGORY_META = {
  shelter: { label: "무더위쉼터", icon: "🏛️", color: "#2b6fd1" },
  bank:    { label: "은행",       icon: "🏦", color: "#1f8a4c" },
  mart:    { label: "마트",       icon: "🛒", color: "#e08b1f" },
  cvs:     { label: "CU 편의점",  icon: "🏪", color: "#c0392b" },
};

const PLACES = [
  // 실데이터 (PoC 대상) - KT부산경남광역본부-부산시 협약 우리동네 기후쉼터 네트워크에 포함된 실제 지점
  { id: "kt-bukyung", category: "shelter", name: "KT 부경대직영점", address: "부산 남구 대연동 62-3번지 1층 일부", phone: "051-612-3086", hours: "09:00 - 18:00", amenities: ["냉방", "의자"], source: "KT부산경남광역본부 부산시 우리동네 기후쉼터 협약 (2025-12-16 국제신문 보도, busan.go.kr/depart/shelter02)", verified: true },
  { id: "shelter01", category: "shelter", name: "OO행정복지센터 무더위쉼터", address: "부산 남구 (예시)", hours: "09:00 - 18:00", amenities: ["냉방", "의자", "화장실"], source: "공공데이터포털(예정)" },
  { id: "shelter02", category: "shelter", name: "OO경로당 무더위쉼터", address: "부산 남구 (예시)", hours: "09:00 - 17:00", amenities: ["냉방", "의자"], source: "공공데이터포털(예정)" },
  { id: "bank01", category: "bank", name: "OO은행 남구지점", address: "부산 남구 (예시)", hours: "09:00 - 16:00", amenities: ["냉방", "의자", "화장실"], source: "현장 조사(예정)" },
  { id: "bank02", category: "bank", name: "OO농협 남구지점", address: "부산 남구 (예시)", hours: "09:00 - 16:00", amenities: ["냉방", "의자"], source: "현장 조사(예정)" },
  { id: "mart01", category: "mart", name: "OO마트 본점", address: "부산 남구 (예시)", hours: "10:00 - 22:00", amenities: ["냉방", "의자"], source: "현장 조사(예정)" },
  { id: "cvs01", category: "cvs", name: "CU OO점", address: "부산 남구 (예시)", hours: "24시간", amenities: ["냉방"], source: "현장 조사(예정)" },
  { id: "cvs02", category: "cvs", name: "CU OO2호점", address: "부산 남구 (예시)", hours: "24시간", amenities: ["냉방", "의자"], source: "현장 조사(예정)" },
];

const CATEGORY_TOTAL_KNOWN = 48;
