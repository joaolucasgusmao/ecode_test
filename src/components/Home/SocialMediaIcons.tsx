import { SocialMediaLink } from "@/types/HomeInfos";

interface socialMediaProps {
  socialMedia: SocialMediaLink[];
}

const SocialMediaIcons = ({ socialMedia }: socialMediaProps) => {
  return (
    <ul>
      {socialMedia.map((social) => {
        return (
          <li key={social.slug}>
            <div
              dangerouslySetInnerHTML={{ __html: social.svg_icon_jsx }}
              aria-label={social.slug}
              style={{ width: 20, height: 20 }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaIcons;
