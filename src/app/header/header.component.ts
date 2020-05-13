import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public title = `Jordan BORDONADO - Interactive resume`;

  constructor(private router: Router) {}

  public accessHome(): void {
    this.router.navigate(['/']);
  }
}
