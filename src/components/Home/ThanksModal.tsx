import { useEffect, useState } from "react";

const ThanksModal = ({
  videoUrl,
  onClose,
}: {
  videoUrl: string;
  onClose: () => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(true);

    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById("modal");
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  return (
    <div
      className={
        "fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center backdrop-blur-sm"
      }
    >
      <div
        id="modal"
        className={`bg-transparent rounded-xl p-4 relative max-w-4xl  flex flex-col transition-transform transform max-sm:w-4/5 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={onClose}
          className={"absolute top-6 right-6 text-white text-xl"}
        >
          X
        </button>
        <iframe
          width="600"
          height="315"
          src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoUrl)}`}
          frameBorder="0"
          allowFullScreen
          className={"rounded-xl max-md-2:w-full max-sm:h-44"}
        />
      </div>
    </div>
  );
};

const getYouTubeVideoId = (url: string) => {
  return url.split("v=")[1]?.split("&")[0];
};

export default ThanksModal;
