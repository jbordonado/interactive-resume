import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScrollService } from '../shared/scroll.service';
import { NavigationItem } from './navigation.model';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'jb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnChanges {
  @Input() isSidebarOpen: boolean;

  @Output() sidenavToggle = new EventEmitter<boolean>();

  public navigationItems: NavigationItem[];
  public isOpen: boolean;

  constructor(
    private navigationService: NavigationService,
    private titleService: Title,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.navigationItems = this.navigationService.getNavigationItems();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(_changes: SimpleChanges): void {
    this.isOpen = this.isSidebarOpen;
  }

  public isIcon(navItem: NavigationItem): boolean {
    return navItem.image.type === 'icon';
  }

  public onNavClick(navItem: NavigationItem): void {
    this.titleService.setTitle(
      `Jordan BORDONADO interactive resume - ${navItem.name}`
    );
    this.closeSidenav();
  }

  public closeSidenav(): void {
    this.sidenavToggle.emit();
    this.scrollService.scrollToTop();
  }
}
