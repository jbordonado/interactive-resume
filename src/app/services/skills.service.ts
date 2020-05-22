import { Injectable } from '@angular/core';
import { SKILLS } from '../app.constants';
import { Skills } from '../interface/skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  public getSkills(): Skills[] {
    return SKILLS;
  }
}
