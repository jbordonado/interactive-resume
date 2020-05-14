export interface Profile {
  firstname: string;
  lastname: string;
  birthDate: Date;
  location: Location;
  description: string[];
  contacts: Contact[];
}

export interface Location {
  city: string;
  country: string;
}

export interface Contact {
  name: string;
  href: string;
}
