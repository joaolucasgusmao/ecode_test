import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "./DropDown";
import { ProfileInfos, ShareLinks } from "@/types/HomeInfos";

interface HeaderProps {
  profile: ProfileInfos;
}

const Header = ({ profile }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleShareClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={"bg-black flex justify-between px-9 h-20 items-center"}>
      <Image src={"/logo.svg"} alt="Ícone da Logo" width={125.24} height={34} />
      <nav className={"flex gap-4"}>
        <Link
          href={"/infos"}
          className={"p-3 rounded-md border-white border-6"}
        >
          <Image
            src={"/briefcase-medical-solid 1.svg"}
            alt="Ícone das informações médicas"
            width={20}
            height={20}
          />
        </Link>
        <button
          onClick={handleShareClick}
          className={"p-3 rounded-md border-white border-6"}
        >
          <Image
            src={"/share.svg"}
            alt="Ícone de compartilhamento"
            width={20}
            height={20}
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full mt-2 right-0 bg-white p-2 rounded-md shadow-lg">
            <Dropdown shareLink={profile.share_links} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
