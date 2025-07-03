const bookFilterItem = [
  // 비문학 (Non-fiction)
  { id: "self_help", name: "자기계발서" },
  { id: "humanities", name: "인문학" },
  { id: "social_science", name: "사회 과학" },
  { id: "natural_science", name: "자연 과학" },
  { id: "technology_engineering", name: "기술/공학" },
  { id: "art_hobby", name: "예술/취미" },
  { id: "history", name: "역사" },
  { id: "biography_memoir", name: "전기/평전" },
  { id: "textbook_reference", name: "교재/참고서" },
  { id: "travel", name: "여행" },
  { id: "practical_guide", name: "실용서" },
];

const BookFilter = () => {
  return (
    <div className="w-[150px] ml-8 rounded-lg shadow-2xl overflow-y-auto no-scrollbar cursor-pointer">
      {bookFilterItem.map((item) => (
        <div
          key={item.id}
          className="w-full h-[50px] flex items-center font-semibold justify-start pl-3 hover:bg-[#dddddd]"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default BookFilter;
