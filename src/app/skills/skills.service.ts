import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SKILLS } from './mock-skills';
import { Skills } from './skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  public getSkills(): Observable<Skills[]> {
    return of(SKILLS);
  }
}
