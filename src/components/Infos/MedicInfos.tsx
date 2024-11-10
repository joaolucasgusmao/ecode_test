import { Person } from "@/types/MedicInfos";

interface MedicInfosProps {
  medicInfos: Person;
}

const MedicInfos = ({ medicInfos }: MedicInfosProps) => {
  return (
    <div>
      <h1>Informações</h1>
      <ul>
        <li>
          <span>Peso</span>
          <h2>{medicInfos.weight}</h2>
        </li>
        <li>
          <span>Altura</span>
          <h2>{medicInfos.height}</h2>
        </li>
        <li>
          <span>Tipo de sangue</span>
          <h2>{medicInfos.blood_type}</h2>
        </li>
        <li>
          <span>Doenças</span>
          <h2>
            {medicInfos.diseases.length > 0 ? (
              medicInfos.diseases.join(", ")
            ) : (
              <p>Nenhuma</p>
            )}
          </h2>
        </li>
        <li>
          <span>Alergias</span>
          <h2>
            {medicInfos.allergies.length > 0 ? (
              medicInfos.allergies.join(", ")
            ) : (
              <p>Nenhuma</p>
            )}
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default MedicInfos;
