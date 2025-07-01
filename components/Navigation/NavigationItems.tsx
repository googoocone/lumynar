// NavigationItems.tsx
import cn from "classnames";
import Link from "next/link"; // Next.js의 Link 컴포넌트

import { AiOutlineHome } from "react-icons/ai";
import { BsBrightnessHighFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const menuItems = [
  { title: "Home", url: "/", icon: <AiOutlineHome suppressHydrationWarning /> },
  { title: "Books", url: "/books", icon: <FaBook suppressHydrationWarning /> },
  {
    title: "Reviews",
    url: "/reviews",
    icon: <MdOutlineRateReview suppressHydrationWarning />,
  },
  {
    title: "Community",
    url: "/community",
    icon: <BsBrightnessHighFill suppressHydrationWarning />,
  },
];

type NavigationItemsProps = {
  onIsMenu: (menuTitle: string) => void;
  currentMenu: string;
};

const NavigationItems = ({ onIsMenu, currentMenu }: NavigationItemsProps) => {
  console.log("currentMenu", currentMenu);
  return (
    <div className="w-full h-[230px] flex flex-col items-center justify-center">
      {menuItems.map((item) => (
        // Link 컴포넌트에 key와 onClick을 직접 전달
        <Link
          href={item.url}
          key={item.title}
          onClick={() => onIsMenu(item.title)}
          className={cn(
            "w-full h-[58px] pl-8 text-white flex items-center justify-start gap-2 cursor-pointer",
            { "bg-[#0D1731]": currentMenu === item.title },
            { "hover:bg-[#0D1731]": currentMenu !== item.title }
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavigationItems;
