import { Injectable } from '@angular/core';
import { SchoolExperience, WorkExperience } from './experience.model';
import { SCHOOL_EXPERIENCES, WORK_EXPERIENCES } from './mock-experiences';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  public getSchoolExperiences(): SchoolExperience[] {
    return SCHOOL_EXPERIENCES;
  }

  public getWorkExperiences(): WorkExperience[] {
    return WORK_EXPERIENCES;
  }
}
