import BookCard from "@/components/Books/BookCard";
import BookFilter from "@/components/Books/BookFilter";
import { bookData } from "../dummyData";

const Books = () => {
  return (
    <div className="w-full h-screen flex bg-[#F8F8F8]">
      <div className="w-64 p-4 border-r border-gray-200 flex items-center justify-center">
        <BookFilter />
      </div>

      <div className="flex-1 p-4 flex flex-col gap-4">
        <div className="w-full">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="책 제목, 저자 등으로 검색해 보세요."
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-6">
              {bookData.map((item) => (
                <BookCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
