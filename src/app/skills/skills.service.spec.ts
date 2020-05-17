import { TestBed } from '@angular/core/testing';
import { SKILLS } from './mock-skills';
import { SkillsService } from './skills.service';

describe('SkillsService', () => {
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsService);
  });

  describe('getSkills', () => {
    it('should return skills', () => {
      const skills = service.getSkills();

      expect(skills).toEqual(SKILLS);
    });
  });
});
