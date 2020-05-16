import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'jb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() menuButtonClick = new EventEmitter<boolean>();

  public onClick(): void {
    this.menuButtonClick.emit(true);
  }
}
