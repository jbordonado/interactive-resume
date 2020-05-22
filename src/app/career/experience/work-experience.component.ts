import { Component, Input } from '@angular/core';
import { WorkExperience } from 'src/app/interface/experience.model';

@Component({
  selector: 'jb-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  @Input() exp: WorkExperience;
}
