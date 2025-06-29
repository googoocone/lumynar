const Navigation = () => {
  return (
    <>
      {/* 데스크탑 네비게이션 */}
      <div className="hidden sm:block w-[250px] bg-blue-950"></div>
      {/* 모바일 네비게이션 */}
      <div className="sm:hidden"></div>
    </>
  );
};

export default Navigation;
