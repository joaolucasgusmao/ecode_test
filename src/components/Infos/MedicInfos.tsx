import { Person } from "@/types/MedicInfos";

interface MedicInfosProps {
  medicInfos: Person;
}

const MedicInfos = ({ medicInfos }: MedicInfosProps) => {
  return (
    <div
      className={
        "flex flex-col gap-4 w-full my-7 border-gray border-y-7 py-7 border-opacity-50"
      }
    >
      <h1 className={"text-3xl text-black  max-md:hidden"}>Informações</h1>
      <ul className={"flex gap-32 max-md:flex-col max-md:gap-6"}>
        <li
          className={
            "max-md:border-gray max-md:w-full max-md:border-b-7 max-md:border-opacity-50 max-md:p-4"
          }
        >
          <span className={"text-lg"}>Peso</span>
          <h2 className={"text-xl"}>{medicInfos.weight}</h2>
        </li>
        <li
          className={
            "max-md:border-gray max-md:w-full max-md:border-b-7 max-md:border-opacity-50 max-md:p-4"
          }
        >
          <span className={"text-lg"}>Altura</span>
          <h2 className={"text-xl"}>{medicInfos.height}</h2>
        </li>
        <li
          className={
            "max-md:border-gray max-md:w-full max-md:border-b-7 max-md:border-opacity-50 max-md:p-4"
          }
        >
          <span className={"text-lg"}>Tipo de sangue</span>
          <h2 className={"text-xl"}>{medicInfos.blood_type}</h2>
        </li>
        <li
          className={
            "max-md:border-gray max-md:w-full max-md:border-b-7 max-md:border-opacity-50 max-md:p-4"
          }
        >
          <span className={"text-lg"}>Doenças</span>
          <h2 className={"text-xl"}>
            {medicInfos.diseases.length > 0 ? (
              medicInfos.diseases.join(", ")
            ) : (
              <h2 className={"text-xl"}>Nenhuma</h2>
            )}
          </h2>
        </li>
        <li className={"max-md:p-4"}>
          <span className={"text-lg"}>Alergias</span>
          <h2 className={"text-xl"}>
            {medicInfos.allergies.length > 0 ? (
              medicInfos.allergies.join(", ")
            ) : (
              <h2 className={"text-xl"}>Nenhuma</h2>
            )}
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default MedicInfos;
