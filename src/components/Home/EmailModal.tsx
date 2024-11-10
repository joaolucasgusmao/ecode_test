import { useEffect, useState } from "react";

const EmailModal = ({ onClose }: { onClose: () => void }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);

    const handleClickOutside = (event: MouseEvent) => {
      const modalElement = document.getElementById("email-modal");
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
        id="email-modal"
        className={
          "bg-white rounded-xl p-10 relative flex flex-col items-center gap-8 w-4/12"
        }
      >
        <p className={"text-center text-xl"}>
          Inscrição realizada com sucesso!
        </p>
        <button
          onClick={onClose}
          className={
            "px-10 py-3 bg-black text-white text-base w-fit rounded-md"
          }
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default EmailModal;
