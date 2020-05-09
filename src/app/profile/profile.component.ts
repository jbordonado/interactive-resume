import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'fc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @HostBinding('class.fc-profile') componentClass = true;
}