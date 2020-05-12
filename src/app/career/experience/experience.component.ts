import { Component, Input } from '@angular/core';
import { WorkExperience } from 'src/app/shared/experience.model';

@Component({
  selector: 'fc-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() exp: WorkExperience;
}
