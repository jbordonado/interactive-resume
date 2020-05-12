import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CareerService } from './career.service';
import { Experience } from './experience.model';

@Component({
  selector: 'fc-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  public experiences$: Observable<Experience[]>;

  constructor(private careerService: CareerService) {}

  ngOnInit(): void {
    this.experiences$ = this.careerService.getWorkExperiences();
  }
}
