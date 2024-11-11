import ContentBlocks from "@/components/Home/ContentBlocks";
import Newsletter from "@/components/Home/Newsletter";
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
      <div
        className={
          "flex gap-4 my-4 flex-col items-center max-sm:w-full max-sm:mx-auto max-sm:flex-col-reverse"
        }
      >
        <ContentBlocks contentBlock={profile.content_blocks} />
        <Newsletter />
      </div>
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
    console.error("Erro ao buscar perfil", error);
    return {
      notFound: true,
    };
  }
};

export default Home;
