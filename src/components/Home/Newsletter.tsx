import Image from "next/image";

const Newsletter = () => {
  return (
    <>
      <label htmlFor="emailInput">Inscreva-se em nossa newsletter</label>
      <div>
        <input id="emailInput" type="email" />
        <button>
          <img src={"/arrow.svg"} alt="Botão de enviar" />
        </button>
      </div>
    </>
  );
};

export default Newsletter;
