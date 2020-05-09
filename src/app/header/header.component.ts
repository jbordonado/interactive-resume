import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'fc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostBinding('class.fc-header') componentClass = true;

  public title = `Jordan BORDONADO's personal website`;
}
