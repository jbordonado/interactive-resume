import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from './experience.model';
import { EXPERIENCES } from './mock-experiences';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  public getExperiences(): Observable<Experience[]> {
    return of(EXPERIENCES);
  }
}
