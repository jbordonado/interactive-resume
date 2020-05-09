import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'fc-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @HostBinding('class.fc-sidenav') componentClass = true;
}
