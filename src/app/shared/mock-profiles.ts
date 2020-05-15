import { Profile } from './profile.model';

export const PROFILE: Profile = {
  firstname: 'Jordan',
  lastname: 'Bordonado',
  birthDate: new Date(1993, 8, 27, 0, 0, 0, 0),
  image: 'assets/jordan.jpg',
  location: {
    city: 'Antibes',
    country: 'France',
  },
  contactDetails: [
    {
      touchpoint: 'Email',
      link: 'mailTo:jordan.bordonado@gmail.com',
      image: 'assets/gmail-icon.png',
    },
    {
      touchpoint: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jbordonado',
      image: 'assets/linkedin-logo.png',
    },
    {
      touchpoint: 'GitHub',
      link: 'https://github.com/Aigloun',
      image: 'assets/github-mark.png',
    },
  ],
  description: [
    `Overall I'm an experienced developer and I understand very well business
    needs to deliver high quality items.`,
    `I enjoy facing challenges and difficult tasks and I'm able to perform
    well under pressure.`,
    `I also fit great in a team because I adapt and learn very fast in a new
    environment, I always make time to provide support or guidance to my
    colleagues and I love to have feedback on my work and try to expand my
    knowledge.`,
  ],
};
