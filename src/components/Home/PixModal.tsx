import Image from "next/image";
import { useEffect, useState } from "react";

const PixModal = ({
  qrCodeUrl,
  onClose,
}: {
  qrCodeUrl: string;
  onClose: () => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(true);

    const handleClickOutside = (event: MouseEvent) => {
      const modalElement = document.getElementById("pix-modal");
      if (modalElement && !modalElement.contains(event.target as Node)) {
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
        id="pix-modal"
        className={`bg-transparent rounded-xl p-8 relative flex flex-col transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={onClose}
          className={"absolute top-4 right-3 font-bold text-white text-xl cursor-pointer"}
        >
          X
        </button>
        <div className={"flex justify-center items-center"}>
          <Image
            src={qrCodeUrl}
            alt="QRCode do Pix"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PixModal;
