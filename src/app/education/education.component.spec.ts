import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceService } from '../shared/experience.service';
import { SCHOOL_EXPERIENCES } from '../shared/mock-experiences';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  let experienceService: ExperienceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [EducationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
  }));

  describe('ngOnInit', () => {
    it('should define experiences$ with school experiences from experience service', () => {
      experienceService = TestBed.inject(ExperienceService);
      spyOn(experienceService, 'getSchoolExperiences').and.returnValue(
        SCHOOL_EXPERIENCES.slice(0, 2)
      );

      fixture.detectChanges();

      expect(component.experiences).toEqual(SCHOOL_EXPERIENCES.slice(0, 2));
    });
  });
});
