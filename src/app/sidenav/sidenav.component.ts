import { Component, Input } from '@angular/core';

@Component({
  selector: 'jb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() isOpen: boolean;
}
