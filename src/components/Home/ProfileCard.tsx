import { ProfileInfos } from "@/types/HomeInfos";
import SocialMediaIcons from "../Home/SocialMediaIcons";
import Profile from "../commons/Profile";

interface ProfileCardProps {
  profile: ProfileInfos;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <>
      <Profile profile={profile} /> 
      <p className={"my-4 text-base text-center w-1/2"}>{profile.bio}</p>
      <SocialMediaIcons socialMedia={profile.social_media_links} />
    </>
  );
};

export default ProfileCard;
