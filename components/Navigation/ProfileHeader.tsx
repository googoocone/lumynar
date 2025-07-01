import Image from "next/image";

import { AiOutlineDown } from "react-icons/ai";

type ProfileHeaderProps = {
  onToggleMenu: () => void;
  imageUrl: string;
  userName: string;
};

const ProfileHeader = ({
  onToggleMenu,
  imageUrl,
  userName,
}: ProfileHeaderProps) => {
  return (
    <>
      <div className="w-[50px] h-[50px]">
        <Image
          src={imageUrl}
          width={50}
          height={50}
          alt="profile image"
        ></Image>
      </div>
      <div
        onClick={onToggleMenu}
        className="flex items-center justify-center gap-2 cursor-pointer"
      >
        <div className="text-white">{userName}</div>
        <AiOutlineDown className="text-white" />
      </div>
    </>
  );
};

export default ProfileHeader;
