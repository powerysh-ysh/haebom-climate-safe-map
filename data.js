// B안(기존 인프라 통합형) 데이터 모델
// ⚠️ 아래 장소는 실제 주소를 아직 확보하지 못해 넣은 "예시 데이터"입니다.
//    공공데이터포털의 무더위쉼터 API, 은행/마트/편의점 위치 데이터를 받으면
//    이 배열을 그 실데이터로 교체하거나, seed.html로 Firestore에 그대로 채워 넣으면 됩니다.
// category: 'shelter'(무더위쉼터, 공공) | 'bank'(은행) | 'mart'(마트) | 'cvs'(CU 편의점)
const CATEGORY_META = {
  shelter: { label: "무더위쉼터", icon: "🏛️", color: "#2b6fd1" },
  bank:    { label: "은행",       icon: "🏦", color: "#1f8a4c" },
  mart:    { label: "마트",       icon: "🛒", color: "#e08b1f" },
  cvs:     { label: "CU 편의점",  icon: "🏪", color: "#c0392b" },
};

const PLACES = [
  { id: "shelter01", category: "shelter", name: "OO행정복지센터 무더위쉼터", address: "부산 남구 (예시)", hours: "09:00 - 18:00", amenities: ["냉방", "의자", "화장실"], source: "공공데이터포털(예정)" },
  { id: "shelter02", category: "shelter", name: "OO경로당 무더위쉼터",       address: "부산 남구 (예시)", hours: "09:00 - 17:00", amenities: ["냉방", "의자"], source: "공공데이터포털(예정)" },
  { id: "bank01",    category: "bank",    name: "OO은행 남구지점",          address: "부산 남구 (예시)", hours: "09:00 - 16:00", amenities: ["냉방", "의자", "화장실"], source: "현장 조사(예정)" },
  { id: "bank02",    category: "bank",    name: "OO농협 남구지점",          address: "부산 남구 (예시)", hours: "09:00 - 16:00", amenities: ["냉방", "의자"], source: "현장 조사(예정)" },
  { id: "mart01",    category: "mart",    name: "OO마트 본점",              address: "부산 남구 (예시)", hours: "10:00 - 22:00", amenities: ["냉방", "의자"], source: "현장 조사(예정)" },
  { id: "cvs01",     category: "cvs",     name: "CU OO점",                  address: "부산 남구 (예시)", hours: "24시간",        amenities: ["냉방"], source: "현장 조사(예정)" },
  { id: "cvs02",     category: "cvs",     name: "CU OO2호점",               address: "부산 남구 (예시)", hours: "24시간",        amenities: ["냉방", "의자"], source: "현장 조사(예정)" },
];

// 대시보드에서 쓰는 "이 카테고리는 문서상 총 48곳 중 일부"라는 안내용 총량 (실데이터 연동 전까지 참고용)
const CATEGORY_TOTAL_KNOWN = 48;
