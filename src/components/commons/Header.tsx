import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShareLinks } from "@/types/HomeInfos";
import SideMenu from "./SideMenu";

interface HeaderProps {
  shareLinks: ShareLinks;
}

const Header = ({ shareLinks }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const handleShareClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <>
      <header
        className={
          "bg-black flex justify-between px-9 h-20 items-center w-full max-sm:hidden"
        }
      >
        <Image
          src={"/logo.svg"}
          alt="Ícone da Logo"
          width={125.24}
          height={34}
        />
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
            <div
              className={
                "absolute top-24 right-1 rounded-md shadow-lg w-56 border-black border-6"
              }
            >
              <ul
                className={
                  "flex items-center justify-center flex-col gap-4 w-full "
                }
              >
                <li className={"border-b-6 w-full text-center p-4"}>
                  <a className={"text-base"} href={shareLinks.facebook}>
                    Facebook
                  </a>
                </li>
                <li className={"border-b-6 w-full text-center pb-4"}>
                  <a className={"text-base"} href={shareLinks.twitter}>
                    Twitter
                  </a>
                </li>
                <li className={"w-full text-center pb-4"}>
                  <a className={"text-base"} href={shareLinks.whatsapp}>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
      <div
        className={
          "hidden max-sm:flex max-sm:justify-end max-sm:w-full max-sm:mt-4"
        }
      >
        <button
          className={"p-3 rounded-md border-black border-6 max-sm:mr-4"}
          onClick={toggleSideMenu}
        >
          <Image
            src={"/hamburguer.svg"}
            alt="Ícone do menu"
            width={20}
            height={20}
          />
        </button>
      </div>
      {isSideMenuOpen && <SideMenu onClose={toggleSideMenu} />}
    </>
  );
};

export default Header;
