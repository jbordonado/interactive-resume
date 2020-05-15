import { SchoolExperience, WorkExperience } from './experience.model';

export const SCHOOL_EXPERIENCES: SchoolExperience[] = [
  {
    schoolName: 'Polytech Nice Sophia',
    schoolLogo: 'polytech-logo.jpg',
    major: 'Engineer in Applied Mathematics and Modelling',
    startDate: new Date(2011, 8),
    endDate: new Date(2016, 7),
    description: [
      'Specialized in mathematics and computer science applied to finance.',
    ],
  },
  {
    schoolName: 'Technical University of Denmark',
    schoolLogo: 'dtu-logo.png',
    major: "Master's degree in Applied Mathematics and Modelling",
    startDate: new Date(2014, 7),
    endDate: new Date(2015, 0),
    description: ['Exchange semester in Denmark.'],
  },
  {
    schoolName: 'Lycée Guillaume Apollinaire',
    schoolLogo: 'apollinaire-logo.png',
    major: 'Baccalauréat Scientifique, Option SVT',
    startDate: new Date(2008, 8),
    endDate: new Date(2011, 5),
    description: [
      'Scientific subjects, equivalent to British “A” Levels or American High School Diploma.',
    ],
  },
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    companyName: 'Air France',
    companyLogo: 'af-logo.png',
    jobTitle: 'Fullstack developer',
    location: 'Sophia Antipolis (France)',
    startDate: new Date(2019, 6),
    description: {
      objective:
        'Development and maintenance of disruption flows (claim creation & follow my claim, flight status, missing baggage declaration) for Air France / KLM joint booking website',
      comments: [
        'The project is at the same time very challenging, at the cutting edge of technology, mature (CI/CD with 1 release / day) and multicultural (AF/KLM - english communication).',
        'This new website is fully responsive and its traffic is increasing regularly.',
        'Therefore, it requires strong abilities in development (front end / back end) as well as communication to follow the rapid pace of the project.',
        `I adapted fast and was able to improve and refactor a lot of the project in my team's scope, putting a strong accent on the testing part.`,
      ],
      technologies: [
        'Angular 9',
        'Typescript',
        'NodeJS 10',
        'Apollo GraphQL',
        'Sass',
      ],
    },
  },
  {
    companyName: 'Air France',
    companyLogo: 'af-logo.png',
    jobTitle: 'Front-end developer',
    location: 'Sophia Antipolis (France)',
    startDate: new Date(2019, 8),
    endDate: new Date(2019, 5),
    description: {
      objective:
        'Development and maintenance of booking flows (standard / unaccompanied minor / ...) for Air France mobile website (mobile.airfrance.fr)',
      comments: [
        'Overall, I had the same kind of responsabilities than in my previous role, except that it was now for the mobile website.',
        'The main difference was that this project also required to learn the art of release management, in the context of a critical application that generates a high traffic and income.',
      ],
      technologies: [
        'J2EE',
        'HTML',
        'CSS',
        'Javascript',
        'Hibernate',
        'JUnit',
        'Selenium',
      ],
    },
  },
  {
    companyName: 'Air France',
    companyLogo: 'af-logo.png',
    jobTitle: 'Front-end developer (Scalian Contractor)',
    location: 'Sophia Antipolis (France)',
    startDate: new Date(2017, 0),
    endDate: new Date(2018, 8),
    description: {
      objective:
        'Development and maintenance of booking flows (standard / unaccompanied minor / ...) for Air France website (www.airfrance.fr)',
      comments: [
        'This role required a high autonomy since this is an old project with loss of functional knowledge over the years.',
        'Beside the technical experience I was able to take from this role, it also taught me a lot about cautiousness and how to deal with big projects with a high traffic and income while it has a lot of dependencies.',
        'After a few months, I took on more responsabilities and was an essiential part of technical and organizational decisions in the team (architecture, git flow, code review, newcomers training, documentation setup, ...)',
      ],
      technologies: [
        'J2EE',
        'HTML',
        'CSS',
        'Javascript',
        'Hibernate',
        'JUnit',
        'Selenium',
      ],
    },
  },
  {
    companyName: 'Amadeus',
    companyLogo: 'amadeus-logo.png',
    jobTitle: 'Apprenticeship - Fullstack developer',
    location: 'Villeneuve-Loubet (France)',
    startDate: new Date(2015, 8),
    endDate: new Date(2016, 8),
    description: {
      objective:
        'Creation of an Internet Booking Engine prototype that will be used as an internal tool to showcase the eRetail XML API to airline customers (data setup, request/response samples, steps to follow, ...)',
      comments: [
        'First, it taught me all the basics of an airline booking flow and the technical terms along that so at that point it was already a big win for me.',
        'Then, I had a lot of autonomy because I was part of a team of functional analyst and no developers, so I had to learn a lot and sharpen my mind to be able to make the right technical and design decisions.',
        'I was also keen on improving the initial target we set, and in that sense it was appreciated that I was able to come up with a lot of initiatives that made the prototype simply better and useful.',
        'The prototype was eventually a success and we even found a way to deploy it and make it accessible remotely for everyone on Amadeus network, which was a bonus goal initially.',
        'At the end of the apprenticeship, I built a lot of confidence in me and I learned a lot on various topics, so I was very grateful to have chosen Amadeus.',
      ],
      technologies: [
        ' J2EE',
        'HTML',
        'CSS',
        'Javascript',
        'SOAP',
        'SoapUI',
        'XML',
        'JAXB',
        'JAX-WS',
      ],
    },
  },
  {
    companyName: 'Inria',
    companyLogo: 'inria-logo.svg',
    jobTitle: 'Intership - Developer (maths oriented)',
    location: 'Sophia-Antipolis (France)',
    startDate: new Date(2015, 6),
    endDate: new Date(2015, 7),
    description: {
      objective:
        'Implementation of the Cucker-Smale mathematical model, based on the construction and analysis of a generic flocking model.',
      comments: [
        'First for the model analysis, I read a lot of scientific papers describing the application fields and the parameters, which eventually made me better at understanding such complicated scientific papers.',
        'Then I was able to implement the mathematical model in MATLAB, to provide simulation of several scenarios both in 2D and in 3D.',
      ],
      technologies: ['MATLAB', 'Scientific papers'],
    },
  },
  {
    companyName: 'Véolia',
    companyLogo: 'veolia-logo.jpg',
    jobTitle: 'Internship - Developer',
    location: 'Saint-Laurent-du-Var (France)',
    startDate: new Date(2014, 5),
    endDate: new Date(2014, 6),
    description: {
      objective:
        'Creation of dynamic word forms to optimize the time employees spend on filling them',
      comments: [
        `I first took part to two field missions with an employee to understand the employees' needs and have a global view of the current limitations of their forms.`,
        `I then proceeded to automate various actions on the forms (each with ~ 40 pages) such as completion, insertion, deletion of checkboxes, field text, pages or images.`,
        `Eventually, I took time to write technical documents describing how to use the new forms and modify them if needed.`,
      ],
      technologies: ['OOo Basic, VBA'],
    },
  },
];
