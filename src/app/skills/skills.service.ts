import { Injectable } from '@angular/core';
import { SKILLS } from './mock-skills';
import { Skills } from './skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  public getSkills(): Skills[] {
    return SKILLS;
  }
}
