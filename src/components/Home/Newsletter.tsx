import Image from "next/image";

const Newsletter = () => {
  return (
    <>
      <label htmlFor="emailInput">Inscreva-se em nossa newsletter</label>
      <div>
        <input id="emailInput" type="email" />
        <button>
          <Image
            src={"/arrow.svg"}
            alt="Botão de enviar"
            width={17.5}
            height={17.5}
          />
        </button>
      </div>
    </>
  );
};

export default Newsletter;
