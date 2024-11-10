import Profile from "@/components/commons/Profile";
import EmergencyContact from "@/components/Infos/EmergencyContact";
import MedicInfos from "@/components/Infos/MedicInfos";
import fetchMedicProfile from "@/services/medicalProfileApi";

import fetchProfile from "@/services/profileApi";
import { ProfileInfos } from "@/types/HomeInfos";
import { Person } from "@/types/MedicInfos";

import { GetServerSideProps } from "next";
import Image from "next/image";

interface InfosProps {
  profile: ProfileInfos;
  medicProfile: Person;
}

const Infos = ({ profile, medicProfile }: InfosProps) => {
  return (
    <>
      <div>
        <button>
          <Image
            src={"/back.svg"}
            alt="Ícone de ir para a Home"
            width={20}
            height={20}
          />
        </button>
        <Profile profile={profile} />
        <p>{medicProfile.birthdate} <span>({medicProfile.age} anos)</span></p>
      </div>
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
