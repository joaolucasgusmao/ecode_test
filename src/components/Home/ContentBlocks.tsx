import { ContentBlock } from "@/types/HomeInfos";
import Image from "next/image";

interface contentBlockProps {
  contentBlock: ContentBlock[];
}

const ContentBlocks = ({ contentBlock }: contentBlockProps) => {
  return (
    <ul>
      {contentBlock.map((block) => {
        if (block.type === "video") {
          const thumbnailUrl = getYouTubeThumbnail(block.config.url);

          return (
            <li key={block.title}>
              {thumbnailUrl && (
                <Image
                  src={thumbnailUrl}
                  alt={block.title}
                  width={550}
                  height={100}
                />
              )}
              <Image
                src={"/play.svg"}
                alt={block.title}
                width={50}
                height={50}
              />
            </li>
          );
        }
        if (block.type === "download") {
          return (
            <li key={block.title}>
              <a href={block.config.url} download target="_blank">
                <Image
                  src={"/download.svg"}
                  alt={block.type}
                  width={50}
                  height={50}
                />
                <h2>{block.type_label}</h2>
              </a>
            </li>
          );
        }

        if (block.type === "external-link") {
          return (
            <li key={block.title}>
              <a href={block.config.url} target="_blank">
                <Image
                  src={"/external-link.svg"}
                  alt={block.type}
                  width={50}
                  height={50}
                />
                <h2>{block.type_label}</h2>
              </a>
            </li>
          );
        }

        if (block.type === "pix") {
          return (
            <li key={block.title}>
              <a href={block.config.url}>
                <Image
                  src={"/pix.svg"}
                  alt={block.type}
                  width={50}
                  height={50}
                />
                <h2>{block.type_label}</h2>
              </a>
            </li>
          );
        }

        if (block.type === "email") {
          return (
            <li key={block.title}>
              <a href={`mailto:${block.config.email}`}>
                <Image
                  src={"/email.svg"}
                  alt={block.type}
                  width={50}
                  height={50}
                />
                <h2>{block.type_label}</h2>
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
};

const getYouTubeThumbnail = (url: string) => {
  const videoId = url.split("v=")[1]?.split("&")[0];
  const imgThumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return imgThumb;
};

export default ContentBlocks;
