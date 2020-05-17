import { Component, OnInit } from '@angular/core';
import { Skills } from './skills.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'jb-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skills: Skills[];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }
}
