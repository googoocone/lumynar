import Image from "next/image";
import Link from "next/link"; // Link 컴포넌트 import

type BookCardProps = {
  id: string | number; // id prop 추가
  title: string;
  description: string;
  image: string;
};

const BookCard = ({ id, title, description, image }: BookCardProps) => {
  // id prop 받기
  return (
    <div className="w-[500px] h-[220px] p-3 flex items-center justify-center gap-3 bg-white/80 rounded-lg hover:shadow-lg transition-all duration-300">
      <div className="w-[130px] h-[195px] relative">
        <Image src={image} fill alt="book cover"></Image>
      </div>
      <div className="flex-1 flex flex-col items-start justify-between h-[170px]">
        <div className="text-2xl font-bold">{title}</div>
        <div>{description}</div>
        <div className="flex items-start justify-center gap-2">
          {/* Discuss 버튼을 Link로 감싸기 */}
          <Link href={`/books/${id}/discuss`}>
            <button className="px-3 py-1.5 bg-[#31394d] text-white rounded-lg cursor-pointer hover:shadow-lg">
              Discuss
            </button>
          </Link>
          {/* Mentor 버튼을 Link로 감싸기 */}
          <Link href={`/books/${id}/mentor`}>
            <button className="px-3 py-1.5 bg-[#FF7F50] text-white rounded-lg cursor-pointer hover:shadow-lg">
              Mentor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
