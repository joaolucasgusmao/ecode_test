import { ProfileInfos } from "@/types/HomeInfos";
import Image from "next/image";

interface ProfileCardProps {
  profile: ProfileInfos;
}

const Profile = ({ profile }: ProfileCardProps) => {
  return (
    <>
      <div className={"flex flex-col items-center gap-3 "}>
        <Image
          src={profile.avatar_url}
          alt="Imagem do perfil"
          unoptimized
          width={192}
          height={192}
          className={"w-48 h-48 rounded-50 border-black border-7 shadow-xl"}
        />
        <h1 className={"text-3xl text-black"}>{profile.name}</h1>
      </div>
    </>
  );
};

export default Profile;
