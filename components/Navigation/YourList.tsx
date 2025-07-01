import Image from "next/image";

const listItem = [
  { title: "돈의 속성", img: "/treatOfMoney.png" },
  { title: "미중 화폐전쟁", img: "/USAChina.png" },
  { title: "혼 모 노", img: "/honMono.png" },
];

const YourList = () => {
  return (
    <>
      <div className="mt-10 text-lg flex items-center justify-center gap-2 text-white">
        Your Collection
      </div>
      <div className="mt-5 flex flex-col gap-1 text-white ">
        {listItem.map((item) => (
          <div
            key={item.title}
            className="pl-5 py-3  w-full flex items-center justify-start gap-4 cursor-pointer hover:bg-[#0D1731] "
          >
            <div className="relative h-7 w-7 overflow-hidden rounded-full border border-amber-50">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover" // 3. object-cover로 비율을 유지합니다.
              />
            </div>
            <div className="text-sm">{item.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default YourList;
