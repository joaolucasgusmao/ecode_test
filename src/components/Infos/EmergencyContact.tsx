import { Person } from "@/types/MedicInfos";

interface EmergenyContactProps {
  emergencyContact: Person;
}

const EmergencyContact = ({ emergencyContact }: EmergenyContactProps) => {
  return (
    <div
      className={
        "flex flex-col gap-4 w-full border-gray border-b-7 py-7 border-opacity-50"
      }
    >
      <h1 className={"text-3xl text-black"}>Contato de emergência</h1>
      <div>
        <span className={"text-lg"}>
          {emergencyContact.emergency_contact.name}
        </span>
        <h2 className={"text-xl"}>
          {emergencyContact.emergency_contact.phone}
        </h2>
      </div>
    </div>
  );
};

export default EmergencyContact;
