export interface SchoolExperience {
  schoolName: string;
  schoolLogo: string;
  major: string;
  startDate: Date;
  endDate: Date;
  description: string[];
}

export interface WorkExperience {
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: Description;
}

export interface Description {
  objective: string;
  comments: string[];
  technologies: string[];
}
