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
import { NavigationItem } from '../interface/navigation.model';
import { NavigationService } from '../services/navigation.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'jb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnChanges {
  @Input() isSidebarOpen: boolean;

  @Output() sidenavToggle = new EventEmitter<boolean>();

  public sectionItems: NavigationItem[];
  public isOpen: boolean;

  constructor(
    private navigationService: NavigationService,
    private titleService: Title,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.sectionItems = this.navigationService.getSectionItems();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(_changes: SimpleChanges): void {
    this.isOpen = this.isSidebarOpen;
  }

  public isIcon(sectionItem: NavigationItem): boolean {
    return sectionItem.image.type === 'icon';
  }

  public onNavClick(sectionItem: NavigationItem): void {
    this.titleService.setTitle(
      $localize`Jordan BORDONADO resume - ${sectionItem.name}`
    );
    this.closeSidenav();
  }

  public closeSidenav(): void {
    this.sidenavToggle.emit();
    this.scrollService.scrollToTop();
  }
}
