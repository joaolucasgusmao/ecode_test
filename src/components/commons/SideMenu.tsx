import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface SideMenuProps {
  onClose: () => void;
}

const SideMenu = ({ onClose }: SideMenuProps) => {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    onClose();
    router.push(url);
  };

  return (
    <div className={"fixed inset-0 z-50"}>
      <div className="bg-black w-full h-full p-4">
        <div className={"flex justify-between items-center mb-4 mt-6"}>
          <Image
            src={"/logo.svg"}
            alt="Ícone da Logo"
            width={125.24}
            height={34}
          />
          <button
            onClick={onClose}
            className={
              "text-xl border-white border-6 text-white px-5 py-2 rounded-md"
            }
          >
            X
          </button>
        </div>
        <nav className={"flex flex-col gap-4 mt-20"}>
          <a
            onClick={() => handleNavigation("/infos")}
            className={"p-3 flex gap-5 items-center cursor-pointer"}
          >
            <Image
              src={"/briefcase-medical-solid 1.svg"}
              alt="Botão para ir para o perfil médico"
              width={20}
              height={20}
            />
            <p className={"text-white text-xl"}>Perfil médico</p>
          </a>
          <a
            target="_blank"
            href="https:\/\/api.whatsapp.com\/send?text=https:\/\/agenciaecode.com.br "
            className={"p-3 flex gap-5 items-center"}
          >
            <Image
              src={"/download-2.svg"}
              alt="Botão de compartilhar"
              width={20}
              height={20}
            />
            <p className={"text-white text-xl"}>Compartilhar</p>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
