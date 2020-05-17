import { TestBed } from '@angular/core/testing';
import { ExperienceService } from './experience.service';
import { SCHOOL_EXPERIENCES, WORK_EXPERIENCES } from './mock-experiences';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceService);
  });

  describe('getSchoolExperiences', () => {
    it('should return school experiences', () => {
      const experiences$ = service.getSchoolExperiences();

      experiences$.subscribe((experiences) =>
        expect(experiences).toEqual(SCHOOL_EXPERIENCES)
      );
    });
  });

  describe('getWorkExperiences', () => {
    it('should return work experiences', () => {
      const experiences$ = service.getWorkExperiences();

      experiences$.subscribe((experiences) =>
        expect(experiences).toEqual(WORK_EXPERIENCES)
      );
    });
  });
});
