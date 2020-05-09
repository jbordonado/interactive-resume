import { Component, Input } from '@angular/core';

@Component({
  selector: 'fc-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  @Input() title: string;
}
