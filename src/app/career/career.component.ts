import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperience } from '../shared/experience.model';
import { ExperienceService } from '../shared/experience.service';

@Component({
  selector: 'fc-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  public experiences$: Observable<WorkExperience[]>;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences$ = this.experienceService.getWorkExperiences();
  }
}
