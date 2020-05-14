import { SchoolExperience, WorkExperience } from './experience.model';

export const SCHOOL_EXPERIENCES: SchoolExperience[] = [
  {
    schoolName: 'Polytech Nice Sophia',
    schoolLogo: 'polytech-logo.jpg',
    major: 'Engineer in Applied Mathematics and Modelling',
    startDate: '2011',
    endDate: '2016',
    description: [
      'Specialized in mathematics and computer science applied to finance.',
    ],
  },
  {
    schoolName: 'Technical University of Denmark',
    schoolLogo: 'dtu-logo.png',
    major: "Master's degree in Applied Mathematics and Modelling",
    startDate: '2014',
    endDate: '2015',
    description: ['Exchange semester in Denmark.'],
  },
  {
    schoolName: 'Lycée Guillaume Apollinaire',
    schoolLogo: 'apollinaire-logo.png',
    major: 'Baccalauréat Scientifique, Option SVT',
    startDate: '2008',
    endDate: '2011',
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
    startDate: '2019/07',
    description: [
      'Developer for DISCUSS team as part of BlueWeb project, that manages the development and maintenance of the new Air France - KLM website, using SAFe methodology.',
      'Development of flows for disruption management, such as : claim creation & follow my claim, flight status, missing baggage declaration',
      'The global project is at the same time very challenging, at the cutting edge of technology, mature (CI/CD with 1 release / day) and multicultural (AF/KLM). Therefore, it requires strong abilities in development (front end / back end) as well as communication (english is the main language) to follow the rapid pace of the project.',
      'Technologies : Angular 8, Typescript, NodeJS 10, GraphQL, Sass',
    ],
  },
  {
    companyName: 'Air France',
    companyLogo: 'af-logo.png',
    jobTitle: 'Front-end developer',
    location: 'Sophia Antipolis (France)',
    startDate: '2018/09',
    endDate: '2019/06',
    description: [
      'Developer for BMW team as part of B2C project, that manages the development and maintenance of Air France booking website, using SAFe methodology.',
      'Development of booking flows for the mobile website : mobile.airfrance.fr',
      'This role required a high autonomy and learning the art of release management, in the context of a critical application that generates a high traffic and income.',
      'Technologies : Java / EE, jsp, HTML, CSS, Javascript, Ajax, Struts, Hibernate, JUnit, Selenium',
    ],
  },
  {
    companyName: 'Air France',
    companyLogo: 'af-logo.png',
    jobTitle: 'Front-end developer',
    location: 'Sophia Antipolis (France)',
    startDate: '2017/01',
    endDate: '2018/09',
    description: [
      'Contractor developer for eSales UI team as part of B2C project, that manages the development and maintenance of Air France booking website, using SAFe methodology.',
      'Development of booking flows for the desktop website : www.airfrance.fr',
      'Also a few developments for D@LLAS team, the middleware of every Air France digital application.',
      "Theses roles required a high autonomy. This experience also made me take responsabilities and initiatives in favour of the teams' organization and the way we worked (git flow, code review implementation, newcomers training, documentation setup, ...)",
      'Technologies : Java EE, jsp, HTML, CSS, Javascript, Ajax, Struts, Spring, Dozer, Hibernate, JUnit, Selenium',
    ],
  },
  {
    companyName: 'Amadeus',
    companyLogo: 'amadeus-logo.png',
    jobTitle: 'Fullstack developer',
    location: 'Villeneuve-Loubet (France)',
    startDate: '2015/09',
    endDate: '2016/09',
    description: [
      'As an apprentice at Amadeus for the eRetail implementation team during one year, my role was the construction of an Internet Booking Engine prototype for airlines, consuming the eRetail XML API :',
      "It consists in a website in which the user can make a standard booking flow (search criterias, flights availability, flights selection, ancillaries, passengers' information, payment). It also provides explanations and details on how to realise such application through the free access to behind-the-scenes elements of each page such as the type of web service called, the files exchanged and SOAP requests made, logs etc...",
      '- Development : Java / J2EE, HTML, CSS, Javascript, Ajax, Log4j 2',
      '- Web services : WSDL, SOAP, XML, XSD, SoapUI, JAXB, JAX-WS',
      '- Tools : Eclipse, Tomcat, Git, Stash',
      '- Creation of a generic WSDL, of POC in Java/PHP for eRetail XML web services',
      '- Creation of technical documentation and video tutorials ',
    ],
  },
  {
    companyName: 'Inria',
    companyLogo: 'inria-logo.svg',
    jobTitle: 'Math/Developer intern',
    location: 'Sophia-Antipolis (France)',
    startDate: '2015/07',
    endDate: '2015/08',
    description: [
      'As an intern at INRIA during two months, my goal is to study the Cucker-Smale mathematical model, based on the construction and analysis of a generic flocking model.',
      '- Model analysis : scientific articles describing the application fields and the parameters',
      '- Implementation and Simulation of several scenarios in MATLAB (2D and 3D version) ',
    ],
  },
  {
    companyName: 'Véolia',
    companyLogo: 'veolia-logo.jpg',
    jobTitle: 'Developer intern',
    location: 'Saint-Laurent-du-Var (France)',
    startDate: '2014/06',
    endDate: '2014/07',
    description: [
      'As an intern at Veolia, my main goal is the creation of dynamic word forms that could reduce the time spent and increase the efficacity during the completion of these forms (more or less 40 pages / form).',
      '- Analysis : two field mission with an agent to understand the key points of improvements and have a global view of the current limitations',
      '- Macros development : automation of various actions such as completion, insertion, deletion of checkboxes, field text, pages or images',
      '- Redaction of technical documentations with regard to the use, behavior or modification of the new forms',
    ],
  },
];
