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
      <label htmlFor="emailInput">Inscreva-se em nossa newsletter</label>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="emailInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            <Image
              src="/arrow.svg"
              alt="Botão de enviar"
              width={15}
              height={15}
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default Newsletter;
