import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'fc-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  @HostBinding('class.fc-experiences') componentClass = true;
}
