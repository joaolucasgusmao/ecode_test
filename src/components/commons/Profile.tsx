import { ProfileInfos } from "@/types/HomeInfos";
import Image from "next/image";

interface ProfileCardProps {
  profile: ProfileInfos;
}

const Profile = ({ profile }: ProfileCardProps) => {
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
    </>
  );
};

export default Profile;
