import { Person } from "@/types/MedicInfos";

interface EmergenyContactProps {
  emergencyContact: Person;
}

const EmergencyContact = ({ emergencyContact }: EmergenyContactProps) => {
  return (
    <div>
      <h1>Contato de emergência</h1>
      <div>
        <span>{emergencyContact.emergency_contact.name}</span>
        <h2>{emergencyContact.emergency_contact.phone}</h2>
      </div>
    </div>
  );
};

export default EmergencyContact;
