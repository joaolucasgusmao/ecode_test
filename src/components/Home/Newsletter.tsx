import { useState, FormEvent } from "react";
import Image from "next/image";
import subscribeNewsletter from "@/services/newsletterApi";
import EmailModal from "./EmailModal";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await subscribeNewsletter(email);
      setMessage("Inscrição realizada com sucesso!");
      setEmail("");
      setShowModal(true);
    } catch (error) {
      setMessage("Erro ao se inscrever na newsletter.");
    }
  };

  return (
    <>
      <form className={"w-96 h-20 max-sm:w-full"} onSubmit={handleSubmit}>
        <label htmlFor="emailInput">Inscreva-se em nossa newsletter</label>
        <div className={"flex items-center justify-between w-full h-4/5"}>
          <input
            className={
              "w-10/12 h-12 border-black border-6 rounded-md pl-4 outline-none"
            }
            id="emailInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Endereço de e-mail"
          />
          <button
            className={"bg-black py-4 px-5 text-center rounded-md"}
            type="submit"
          >
            <Image
              src="/arrow.svg"
              alt="Botão de enviar"
              width={10}
              height={10}
            />
          </button>
        </div>
      </form>
      {showModal && <EmailModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Newsletter;
