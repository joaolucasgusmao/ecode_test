import { ContentBlock } from "@/types/HomeInfos";
import Image from "next/image";
import { useState } from "react";
import ThanksModal from "./ThanksModal";
import PixModal from "./PixModal";

interface contentBlockProps {
  contentBlock: ContentBlock[];
}

const ContentBlocks = ({ contentBlock }: contentBlockProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  const openModal = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const openPixModal = (url: string) => {
    setQrCodeUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl(null);
    setQrCodeUrl(null);
  };

  return (
    <div
      className={"flex gap-4 my-8 max-xl:flex-col max-sm:w-full max-sm:mx-auto"}
    >
      {contentBlock.map((block) => {
        if (block.type === "video") {
          const thumbnailUrl = getYouTubeThumbnail(block.config.url);

          return (
            <li
              key={block.title}
              className={
                "relative list-none max-xl:flex max-xl:justify-center max-sm:w-4/5 mx-auto"
              }
            >
              {thumbnailUrl && (
                <Image
                  src={thumbnailUrl}
                  alt={block.title}
                  width={450}
                  height={100}
                  className={"h-full rounded-xl brightness-60"}
                />
              )}
              <Image
                src={"/play.svg"}
                alt={block.title}
                width={33.84}
                height={40}
                className={
                  "absolute right-48 top-24 cursor-pointer max-xl:right-52 max-xl:top-24 max-sm:!top-16 max-sm:!right-40"
                }
                onClick={() => openModal(block.config.url)}
              />
            </li>
          );
        }
      })}

      <div className={"flex items-center gap-4 max-xl:flex-col"}>
        <ul
          className={
            "flex h-64 gap-4 w-full max-xl:gap-4 max-xl:justify-between max-sm:w-4/5"
          }
        >
          {contentBlock.map((block) => {
            if (block.type === "download" || block.type === "external-link") {
              if (block.type === "download") {
                return (
                  <li
                    key={block.title}
                    className={
                      "bg-black w-48 rounded-xl flex items-center justify-center max-xl:w-52"
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
                      <h2 className={"text-white text-base"}>
                        {block.type_label}
                      </h2>
                    </a>
                  </li>
                );
              }

              if (block.type === "external-link") {
                return (
                  <li
                    key={block.title}
                    className={
                      "bg-black w-48 rounded-xl flex items-center justify-center max-xl:w-52"
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
                      <h2 className={"text-white text-base"}>
                        {block.type_label}
                      </h2>
                    </a>
                  </li>
                );
              }
            }
          })}
        </ul>

        <ul
          className={
            "flex h-64 gap-4 w-full max-xl:gap-4 max-xl:justify-between max-sm:w-4/5"
          }
        >
          {contentBlock.map((block) => {
            if (block.type === "pix" || block.type === "email") {
              if (block.type === "pix") {
                return (
                  <li
                    key={block.title}
                    className={
                      "bg-black w-48 rounded-xl flex items-center justify-center max-xl:w-52"
                    }
                  >
                    <a
                      className={
                        "flex flex-col items-center gap-3 cursor-pointer"
                      }
                      onClick={() =>
                        openPixModal(block.config.qrcode_image_url)
                      }
                    >
                      <Image
                        src={"/pix.svg"}
                        alt={block.type}
                        width={28}
                        height={28}
                      />
                      <h2 className={"text-white text-base"}>
                        {block.type_label}
                      </h2>
                    </a>
                  </li>
                );
              }

              if (block.type === "email") {
                return (
                  <li
                    key={block.title}
                    className={
                      "bg-black w-48 rounded-xl flex items-center justify-center max-xl:w-52"
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
                      <h2 className={"text-white text-base"}>
                        {block.type_label}
                      </h2>
                    </a>
                  </li>
                );
              }
            }
          })}
        </ul>
      </div>

      {isModalOpen && videoUrl && (
        <ThanksModal videoUrl={videoUrl} onClose={closeModal} />
      )}

      {isModalOpen && qrCodeUrl && (
        <PixModal qrCodeUrl={qrCodeUrl} onClose={closeModal} />
      )}
    </div>
  );
};

const getYouTubeThumbnail = (url: string) => {
  const videoId = url.split("v=")[1]?.split("&")[0];
  const imgThumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return imgThumb;
};

export default ContentBlocks;
