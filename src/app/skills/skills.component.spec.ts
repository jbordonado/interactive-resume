import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SKILLS } from './mock-skills';
import { SkillsComponent } from './skills.component';
import { SkillsService } from './skills.service';

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
      spyOn(skillsService, 'getSkills').and.returnValue(of(SKILLS.slice(0, 1)));

      fixture.detectChanges();

      component.skills$.subscribe((skills) =>
        expect(skills).toEqual(SKILLS.slice(0, 1))
      );
    });
  });
});
