import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SchoolExperience, WorkExperience } from './experience.model';
import { SCHOOL_EXPERIENCES, WORK_EXPERIENCES } from './mock-experiences';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  public getSchoolExperiences(): Observable<SchoolExperience[]> {
    return of(SCHOOL_EXPERIENCES);
  }

  public getWorkExperiences(): Observable<WorkExperience[]> {
    return of(WORK_EXPERIENCES);
  }
}
