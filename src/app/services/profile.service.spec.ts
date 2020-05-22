import { TestBed } from '@angular/core/testing';
import { PROFILE } from '../app.constants';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileService);
  });

  describe('getProfile', () => {
    it('should return school experiences', () => {
      const profile = service.getProfile();

      expect(profile).toEqual(PROFILE);
    });
  });
});
