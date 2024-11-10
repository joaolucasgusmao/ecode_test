import { ProfileInfos } from "@/types/HomeInfos";
import Image from "next/image";
import SocialMediaIcons from "../Home/SocialMediaIcons";

interface ProfileCardProps {
  profile: ProfileInfos;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <>
      <div>
        <Image
          src={profile.avatar_url}
          alt="Imagem do perfil"
          unoptimized
          width={120}
          height={120}
        />
        <h1>{profile.name}</h1>
      </div>
      <p>{profile.bio}</p>
      <SocialMediaIcons socialMedia={profile.social_media_links} />
    </>
  );
};

export default ProfileCard;
