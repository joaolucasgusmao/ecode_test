import ProfileCard from "@/components/commons/ProfileCard";
import fetchProfile from "@/services/profileApi";
import { ProfileInfos } from "@/types/HomeInfos";

interface HomeProps {
  profile: ProfileInfos;
}

const Home = ({ profile }: HomeProps) => {
  return (
    <>
      <ProfileCard profile={profile} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const profile = await fetchProfile();
    return {
      props: { profile },
    };
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    return {
      notFound: true, 
    };
  }
};

export default Home;
