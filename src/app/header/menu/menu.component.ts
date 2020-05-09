import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'fc-header-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @HostBinding('class.fc-header-menu') componentClass = true;
}
