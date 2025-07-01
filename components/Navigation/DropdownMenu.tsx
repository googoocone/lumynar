const DropdownMenu = () => {
  return (
    <div className="absolute pl-2 top-17 left-20 w-35 h-32 bg-[#31394D] text-white shadow-2xl rounded-lg">
      <ul>
        <li className="p-2 cursor-pointer  hover:bg-[#0D1731] hover:text-white">
          내 정보
        </li>
        <li className="p-2 cursor-pointer hover:bg-[#0D1731] hover:text-white">
          설정
        </li>
        <li className="p-2 cursor-pointer hover:bg-[#0D1731] hover:text-white">
          로그아웃
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
