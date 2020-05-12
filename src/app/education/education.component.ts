import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolExperience } from '../shared/experience.model';
import { ExperienceService } from '../shared/experience.service';

@Component({
  selector: 'fc-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public experiences$: Observable<SchoolExperience[]>;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences$ = this.experienceService.getSchoolExperiences();
  }
}
