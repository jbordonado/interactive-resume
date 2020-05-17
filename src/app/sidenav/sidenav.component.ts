import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'jb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnChanges {
  @Input() isSidebarOpen: boolean;

  @Output() sidenavToggle = new EventEmitter<boolean>();

  public isOpen: boolean;

  constructor(private scrollService: ScrollService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(_changes: SimpleChanges): void {
    this.isOpen = this.isSidebarOpen;
  }

  public closeSidenav(): void {
    this.sidenavToggle.emit();
    this.scrollService.scrollToTop();
  }
}
