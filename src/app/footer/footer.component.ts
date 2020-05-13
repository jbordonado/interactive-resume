import { Component } from '@angular/core';

@Component({
  selector: 'jb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public copyrightDate = new Date().getFullYear();
}
