import { SocialMediaLink } from "@/types/HomeInfos";
import Link from "next/link";

interface SocialMediaProps {
  socialMedia: SocialMediaLink[];
}

const SocialMediaIcons = ({ socialMedia }: SocialMediaProps) => {
  return (
    <ul>
      {socialMedia.map((social) => {
        return (
          <li key={social.slug}>
            <Link href={social.url} target="_blank" rel="noopener noreferrer">
              <div
                dangerouslySetInnerHTML={{ __html: social.svg_icon_jsx }}
                aria-label={social.slug}
                style={{ width: 20, height: 20 }}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaIcons;
