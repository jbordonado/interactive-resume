import { Component, Input } from '@angular/core';
import { SchoolExperience } from 'src/app/interface/experience.model';

@Component({
  selector: 'jb-school-experience',
  templateUrl: './school-experience.component.html',
  styleUrls: ['./school-experience.component.scss'],
})
export class SchoolExperienceComponent {
  @Input() experience: SchoolExperience;
}
