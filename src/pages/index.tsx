import ContentBlocks from "@/components/Home/ContentBlocks";
import ProfileCard from "@/components/Home/ProfileCard";
import fetchProfile from "@/services/profileApi";
import { ProfileInfos } from "@/types/HomeInfos";
import { GetServerSideProps } from "next";

interface HomeProps {
  profile: ProfileInfos;
}

const Home = ({ profile }: HomeProps) => {
  return (
    <>
      <ProfileCard profile={profile} />
      <ContentBlocks contentBlock={profile.content_blocks} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
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
