import { useState, FormEvent } from "react";
import Image from "next/image";
import subscribeNewsletter from "@/services/newsletterApi";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await subscribeNewsletter(email);
      setMessage("Inscrição realizada com sucesso!");
      setEmail("");
    } catch (error) {
      setMessage("Erro ao se inscrever na newsletter.");
    }
  };

  return (
    <>
      <form className={"w-96 h-20"} onSubmit={handleSubmit}>
        <label htmlFor="emailInput">Inscreva-se em nossa newsletter</label>
        <div
          className={
            "flex items-center justify-between w-full h-4/5"
          }
        >
          <input
            className={"w-10/12 h-12 border-black border-6 rounded-md pl-4 outline-none"}
            id="emailInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Endereço de e-mail"
          />
          <button
            className={"bg-black py-3 px-4 text-center rounded-md"}
            type="submit"
          >
            <Image
              src="/arrow.svg"
              alt="Botão de enviar"
              width={12}
              height={15}
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default Newsletter;
