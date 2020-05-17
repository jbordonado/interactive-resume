import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'jb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() menuButtonClick = new EventEmitter<boolean>();

  constructor(private scrollService: ScrollService) {}

  public onMenuClick(): void {
    this.menuButtonClick.emit();
  }

  public onTitleClick(): void {
    this.scrollService.scrollToTop();
  }
}
