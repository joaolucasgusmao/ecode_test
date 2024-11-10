import Profile from "@/components/commons/Profile";
import EmergencyContact from "@/components/Infos/EmergencyContact";
import MedicInfos from "@/components/Infos/MedicInfos";
import fetchMedicProfile from "@/services/medicProfileApi";

import fetchProfile from "@/services/profileApi";
import { ProfileInfos } from "@/types/HomeInfos";
import { Person } from "@/types/MedicInfos";

import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

interface InfosProps {
  profile: ProfileInfos;
  medicProfile: Person;
}

const Infos = ({ profile, medicProfile }: InfosProps) => {
  return (
    <>
      <div className={"flex justify-between w-5/6"}>
        <Link
          className={"border-black border-6 py-2 px-3 h-fit rounded-md"}
          href={"/"}
        >
          <Image
            src={"/back.svg"}
            alt="Ícone de ir para a Home"
            width={10}
            height={10}
          />
        </Link>
        <Profile profile={profile} />
        <span></span>
      </div>
      <p className={"my-1 ml-10 text-base"}>
        {medicProfile.birthdate} <span>({medicProfile.age} anos)</span>
      </p>
      <MedicInfos medicInfos={medicProfile} />
      <EmergencyContact emergencyContact={medicProfile} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [profile, medicProfile] = await Promise.all([
      fetchProfile(),
      fetchMedicProfile(),
    ]);

    return {
      props: { profile, medicProfile },
    };
  } catch (error) {
    console.error("Erro ao buscar perfis:", error);
    return {
      notFound: true,
    };
  }
};

export default Infos;
