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
      <p>{profile.bio}</p>
      <SocialMediaIcons socialMedia={profile.social_media_links} />
    </>
  );
};

export default ProfileCard;
