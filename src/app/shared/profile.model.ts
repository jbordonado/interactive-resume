export interface Profile {
  firstname: string;
  lastname: string;
  birthDate: Date;
  image: string;
  location: Location;
  contactDetails: Contact[];
  description: string[];
}

export interface Location {
  city: string;
  country: string;
}

export interface Contact {
  touchpoint: string;
  link: string;
  image: string;
  ariaLabel: string;
}
