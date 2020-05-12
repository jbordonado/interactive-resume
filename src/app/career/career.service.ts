import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from './experience.model';
import { WORK_EXPERIENCES } from './mock-experiences';

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  public getWorkExperiences(): Observable<Experience[]> {
    return of(WORK_EXPERIENCES);
  }
}
