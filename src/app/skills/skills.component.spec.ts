import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SKILLS } from '../app.constants';
import { SkillsService } from '../services/skills.service';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  let skillsService: SkillsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [SkillsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
  }));

  describe('ngOnInit', () => {
    it('should define the skills with the skills service', () => {
      skillsService = TestBed.inject(SkillsService);
      spyOn(skillsService, 'getSkills').and.returnValue(SKILLS.slice(0, 1));

      fixture.detectChanges();

      expect(component.skills).toEqual(SKILLS.slice(0, 1));
    });
  });
});
