export interface EmergencyContact {
  name: string;
  phone: string;
}

export interface Person {
  name: string;
  avatar_url: string;
  weight: string;
  height: string;
  blood_type: string;
  diseases: string[];
  allergies: string[];
  emergency_contact: EmergencyContact;
  birthdate: string;
  age: number;
}
