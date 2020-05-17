import { NavigationItem } from './navigation.model';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    name: 'Home',
    route: '/',
    image: {
      type: 'img',
      value: 'assets/home_outline.svg',
    },
  },
  {
    name: 'Profile',
    route: '/profile',
    image: {
      type: 'icon',
      value: 'perm_identity',
    },
  },
  {
    name: 'Education',
    route: '/education',
    image: {
      type: 'img',
      value: 'assets/school_outline.svg',
    },
  },
  {
    name: 'Career',
    route: '/career',
    image: {
      type: 'icon',
      value: 'work_outline',
    },
  },
  {
    name: 'Certifications',
    route: '/certifications',
    image: {
      type: 'img',
      value: 'assets/certificate_outline.svg',
    },
  },
  {
    name: 'Skills',
    route: '/skills',
    image: {
      type: 'icon',
      value: 'star_outline',
    },
  },
  {
    name: 'Bonus',
    route: '/bonus',
    image: {
      type: 'icon',
      value: 'card_giftcard',
    },
  },
];
