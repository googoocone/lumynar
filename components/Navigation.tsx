"use client";

import { useState } from "react";
import DropdownMenu from "./Navigation/DropdownMenu";
import NavigationItems from "./Navigation/NavigationItems";
import ProfileHeader from "./Navigation/ProfileHeader";
import TryPremium from "./Navigation/TryPremium";
import YourList from "./Navigation/YourList";

const Navigation = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isMenu, setIsMenu] = useState("");

  const toggleMenu = () => {
    setIsDropDown((prev) => !prev);
  };

  return (
    <>
      {/* 데스크탑 네비게이션 */}
      <div className="hidden sm:block w-[250px] h-screen bg-[#31394D]">
        <div className="w-full h-[90px] flex items-center justify-center gap-3 relative">
          <ProfileHeader
            onToggleMenu={toggleMenu}
            imageUrl="/profile.png"
            userName="Park youngho"
          ></ProfileHeader>
          {isDropDown === true && <DropdownMenu></DropdownMenu>}
        </div>
        <NavigationItems
          onIsMenu={setIsMenu}
          currentMenu={isMenu}
        ></NavigationItems>

        <TryPremium></TryPremium>
        <YourList></YourList>
        <div></div>
      </div>
      {/* 모바일 네비게이션 */}
      <div className="sm:hidden"></div>
    </>
  );
};

export default Navigation;
