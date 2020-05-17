import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Profile } from '../shared/profile.model';
import { ProfileService } from '../shared/profile.service';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  let profileService: ProfileService;

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

      fixture.detectChanges();

      expect(component.profile).toEqual(fakeProfile);
      expect(component.age).toBe(3);
      expect(component.subTitle).toBe(
        'Fullstack developer (+3 years experience)'
      );
    });
  });
});
