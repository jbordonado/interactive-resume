import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../shared/profile.model';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'jb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public profile$: Observable<Profile>;
  public copyrightDate = new Date().getFullYear();

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile();
  }
}
