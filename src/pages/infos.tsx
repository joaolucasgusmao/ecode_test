import Profile from "@/components/commons/Profile";
import MedicInfos from "@/components/Infos/MedicInfos";
import fetchMedicProfile from "@/services/medicalProfileApi";

import fetchProfile from "@/services/profileApi";
import { ProfileInfos } from "@/types/HomeInfos";
import { Person } from "@/types/MedicInfos";

import { GetServerSideProps } from "next";

interface InfosProps {
  profile: ProfileInfos;
  medicProfile: Person;
}

const Infos = ({ profile, medicProfile }: InfosProps) => {
  return (
    <>
      <Profile profile={profile} />
      <p>{medicProfile.birthdate}</p>
      <MedicInfos medicInfos={medicProfile} />
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
