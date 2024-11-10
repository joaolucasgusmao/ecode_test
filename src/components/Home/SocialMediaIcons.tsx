import { SocialMediaLink } from "@/types/HomeInfos";
import Link from "next/link";

interface SocialMediaProps {
  socialMedia: SocialMediaLink[];
}

const SocialMediaIcons = ({ socialMedia }: SocialMediaProps) => {
  return (
    <ul className={"flex gap-4 items-center my-1"}>
      {socialMedia.map((social) => {
        return (
          <li key={social.slug} className={"bg-black p-2 rounded-md"}>
            <Link href={social.url} target="_blank" rel="noopener noreferrer">
              <div
                dangerouslySetInnerHTML={{ __html: social.svg_icon_jsx }}
                aria-label={social.slug}
                style={{ width: 23, height: 23, fill: 'currentcolor', color: '#FFFFFF'}}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaIcons;
