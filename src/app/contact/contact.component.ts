import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'fc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @HostBinding('class.fc-contact') componentClass = true;
}
