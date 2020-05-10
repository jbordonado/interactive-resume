import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from './experience.model';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'fc-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  public experiences$: Observable<Experience[]>;
  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experiences$ = this.experienceService.getExperiences();
  }
}
