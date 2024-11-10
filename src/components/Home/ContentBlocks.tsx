import { ContentBlock } from "@/types/HomeInfos";
import Image from "next/image";

interface contentBlockProps {
  contentBlock: ContentBlock[];
}

const ContentBlocks = ({ contentBlock }: contentBlockProps) => {
  return (
    <ul className={"h-60 flex gap-8 my-7"}>
      {contentBlock.map((block) => {
        if (block.type === "video") {
          const thumbnailUrl = getYouTubeThumbnail(block.config.url);

          return (
            <li key={block.title} className={"relative"}>
              {thumbnailUrl && (
                <Image
                  src={thumbnailUrl}
                  alt={block.title}
                  width={453}
                  height={100}
                  className={"h-full rounded-xl  brightness-60"}
                />
              )}
              <Image
                src={"/play.svg"}
                alt={block.title}
                width={33.84}
                height={40}
                className={"absolute right-52 top-24 cursor-pointer"}
              />
            </li>
          );
        }
        if (block.type === "download") {
          return (
            <li
              key={block.title}
              className={
                "bg-black w-48 rounded-xl flex items-center justify-center"
              }
            >
              <a
                className={"flex flex-col items-center gap-3"}
                href={block.config.url}
                download
                target="_blank"
              >
                <Image
                  src={"/download.svg"}
                  alt={block.type}
                  width={28}
                  height={28}
                />
                <h2 className={"text-white text-base"}>{block.type_label}</h2>
              </a>
            </li>
          );
        }

        if (block.type === "external-link") {
          return (
            <li
              key={block.title}
              className={
                "bg-black w-48 rounded-xl flex items-center justify-center"
              }
            >
              <a
                className={"flex flex-col items-center gap-3"}
                href={block.config.url}
                target="_blank"
              >
                <Image
                  src={"/external-link.svg"}
                  alt={block.type}
                  width={28}
                  height={28}
                />
                <h2 className={"text-white text-base"}>{block.type_label}</h2>
              </a>
            </li>
          );
        }

        if (block.type === "pix") {
          return (
            <li
              key={block.title}
              className={
                "bg-black w-48 rounded-xl flex items-center justify-center"
              }
            >
              <a
                className={"flex flex-col items-center gap-3"}
                href={block.config.url}
              >
                <Image
                  src={"/pix.svg"}
                  alt={block.type}
                  width={28}
                  height={28}
                />
                <h2 className={"text-white text-base"}>{block.type_label}</h2>
              </a>
            </li>
          );
        }

        if (block.type === "email") {
          return (
            <li
              key={block.title}
              className={
                "bg-black w-48 rounded-xl flex items-center justify-center"
              }
            >
              <a
                className={"flex flex-col items-center gap-3"}
                href={`mailto:${block.config.email}`}
              >
                <Image
                  src={"/email.svg"}
                  alt={block.type}
                  width={28}
                  height={28}
                />
                <h2 className={"text-white text-base"}>{block.type_label}</h2>
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
