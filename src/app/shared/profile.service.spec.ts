import { TestBed } from '@angular/core/testing';
import { PROFILE } from './mock-profiles';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileService);
  });

  describe('getProfile', () => {
    it('should return school experiences', () => {
      const profile$ = service.getProfile();

      profile$.subscribe((profile) => expect(profile).toEqual(PROFILE));
    });
  });
});
