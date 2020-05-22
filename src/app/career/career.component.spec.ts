import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WORK_EXPERIENCES } from '../app.constants';
import { ExperienceService } from '../services/experience.service';
import { CareerComponent } from './career.component';

describe('CareerComponent', () => {
  let component: CareerComponent;
  let fixture: ComponentFixture<CareerComponent>;

  let experienceService: ExperienceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [CareerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerComponent);
    component = fixture.componentInstance;
  }));

  describe('ngOnInit', () => {
    it('should define experiences with work experiences from experience service', () => {
      experienceService = TestBed.inject(ExperienceService);
      spyOn(experienceService, 'getWorkExperiences').and.returnValue(
        WORK_EXPERIENCES.slice(0, 2)
      );

      fixture.detectChanges();

      expect(component.experiences).toEqual(WORK_EXPERIENCES.slice(0, 2));
    });
  });
});
