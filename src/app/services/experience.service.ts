import { Injectable } from '@angular/core';
import { SCHOOL_EXPERIENCES, WORK_EXPERIENCES } from '../app.constants';
import {
  SchoolExperience,
  WorkExperience,
} from '../interface/experience.model';

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
