import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperience } from '../interface/experience.model';
import { Profile } from '../interface/profile.model';
import { ExperienceService } from '../services/experience.service';
import { ProfileService } from '../services/profile.service';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  let profileService: ProfileService;
  let experienceService: ExperienceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  }));

  describe('ngOnInit', () => {
    it('should define profile with the data from profile service, and then calculate the corresponding age and define the subtitle', () => {
      profileService = TestBed.inject(ProfileService);
      experienceService = TestBed.inject(ExperienceService);

      const birthDateFromThreeYearsAgo = new Date();
      birthDateFromThreeYearsAgo.setFullYear(
        birthDateFromThreeYearsAgo.getFullYear() - 3
      );

      const fakeProfile: Profile = {
        firstname: 'aFirstName',
        lastname: 'aLastName',
        birthDate: birthDateFromThreeYearsAgo,
        image: 'assets/profile-logo.jpg',
        location: {
          city: 'Antibes',
          country: 'France',
        },
        contactDetails: [],
        description: [],
      };
      spyOn(profileService, 'getProfile').and.returnValue(fakeProfile);

      const fakeExperiences: WorkExperience[] = [
        {
          companyName: 'Air France',
          companyLogo: 'af-logo.png',
          jobTitle: $localize`Front-end developer (Scalian Contractor)`,
          location: 'Sophia Antipolis (France)',
          startDate: new Date(2017, 0),
          endDate: new Date(2018, 7),
          description: {
            objective: $localize`Development and maintenance of booking flows (standard / unaccompanied minor / ...) for Air France website (www.airfrance.fr)`,
            comments: [
              $localize`This role required a high autonomy since this is an old project with loss of functional knowledge over the years.`,
              $localize`Beside the technical experience I was able to take from this role, it also taught me a lot about cautiousness and how to deal with big projects with a high traffic and income while it has a lot of dependencies.`,
              $localize`After a few months, I took on more responsabilities and was an essential part of technical and organizational decisions in the team (architecture, git flow, code review, newcomers training, documentation setup, ...)`,
            ],
            technologies: [
              'Java / J2EE',
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
          jobTitle: $localize`Apprenticeship - Fullstack developer`,
          location: 'Villeneuve-Loubet (France)',
          startDate: new Date(2015, 8),
          endDate: new Date(2016, 8),
          description: {
            objective: $localize`Creation of an Internet Booking Engine prototype that will be used as an internal tool to showcase the eRetail XML API to airline customers (data setup, request/response samples, steps to follow, ...)`,
            comments: [
              $localize`First, it taught me all the basics of an airline booking flow and the technical terms along that so at that point it was already a big win for me.`,
              $localize`Then, I had a lot of autonomy because I was part of a team of functional analyst and no developers, so I had to learn a lot and sharpen my mind to be able to make the right technical and design decisions.`,
              $localize`I was also keen on improving the initial target we set, and in that sense it was appreciated that I was able to come up with a lot of initiatives that made the prototype simply better and useful.`,
              $localize`The prototype was eventually a success and we even found a way to deploy it and make it accessible remotely for everyone on Amadeus network, which was a bonus goal initially.`,
              $localize`At the end of the apprenticeship, I built a lot of confidence in me and I learned a lot on various topics, so I was very grateful to have chosen Amadeus.`,
            ],
            technologies: [
              'Java / J2EE',
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
          jobTitle: $localize`Intership - Developer (maths oriented)`,
          location: 'Sophia-Antipolis (France)',
          startDate: new Date(2015, 6),
          endDate: new Date(2015, 7),
          description: {
            objective: $localize`Implementation of the Cucker-Smale mathematical model, based on the construction and analysis of a generic flocking model.`,
            comments: [
              $localize`First for the model analysis, I read a lot of scientific papers describing the application fields and the parameters, which eventually made me better at understanding such complicated scientific papers.`,
              $localize`Then I was able to implement the mathematical model in MATLAB, to provide simulation of several scenarios both in 2D and in 3D.`,
            ],
            technologies: ['MATLAB', $localize`Scientific papers`],
          },
        },
        {
          companyName: 'Véolia',
          companyLogo: 'veolia-logo.jpg',
          jobTitle: $localize`Internship - Developer`,
          location: 'Saint-Laurent-du-Var (France)',
          startDate: new Date(2014, 5),
          endDate: new Date(2014, 6),
          description: {
            objective: $localize`Creation of dynamic Word forms to optimize the time employees spend on filling them`,
            comments: [
              $localize`I first took part to two field missions with an employee to understand the employees' needs and have a global view of the current limitations of their forms.`,
              $localize`I then proceeded to automate various actions on the forms (each with ~ 40 pages) such as completion, insertion, deletion of checkboxes, field text, pages or images.`,
              $localize`Eventually, I took time to write technical documents describing how to use the new forms and modify them if needed.`,
            ],
            technologies: ['OOo Basic, VBA'],
          },
        },
      ];
      spyOn(experienceService, 'getWorkExperiences').and.returnValue(
        fakeExperiences
      );

      fixture.detectChanges();

      expect(component.profile).toEqual(fakeProfile);
      expect(component.age).toBe(3);
      expect(component.subTitle).toBe(
        'Front-end developer (Scalian Contractor) (+2 years experience)'
      );
    });
  });
});
