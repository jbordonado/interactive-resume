import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationItem } from '../interface/navigation.model';
import { NavigationService } from '../services/navigation.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'jb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() menuButtonClick = new EventEmitter<boolean>();

  public languagesItem: NavigationItem[];

  constructor(
    private navigationService: NavigationService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.languagesItem = this.navigationService.getLanguageItems();
  }

  public onMenuClick(): void {
    this.menuButtonClick.emit();
  }

  public onTitleClick(): void {
    this.scrollService.scrollToTop();
  }
}
