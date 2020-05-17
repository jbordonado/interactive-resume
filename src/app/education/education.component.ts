import { Component, OnInit } from '@angular/core';
import { SchoolExperience } from '../shared/experience.model';
import { ExperienceService } from '../shared/experience.service';

@Component({
  selector: 'jb-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public experiences: SchoolExperience[];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences = this.experienceService.getSchoolExperiences();
  }
}
