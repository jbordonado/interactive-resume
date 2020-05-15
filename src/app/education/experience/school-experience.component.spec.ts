import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolExperienceComponent } from './school-experience.component';

describe('SchoolExperienceComponent', () => {
  let component: SchoolExperienceComponent;
  let fixture: ComponentFixture<SchoolExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolExperienceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
