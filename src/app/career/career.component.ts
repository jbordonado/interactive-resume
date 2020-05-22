import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../interface/experience.model';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'jb-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  public experiences: WorkExperience[];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences = this.experienceService.getWorkExperiences();
  }
}
