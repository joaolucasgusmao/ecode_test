import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Image src={"/logo.svg"} alt="Ícone da Logo" width={125.24} height={34} />
      <nav>
        <Link href={"/infos"}>
          <Image
            src={"/briefcase-medical-solid 1.svg"}
            alt="Ícone das informações médicas"
            width={20}
            height={20}
          />
        </Link>
        <button>
          <Image
            src={"/share.svg"}
            alt="Ícone de compartilhamento"
            width={17.5}
            height={17.5}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
