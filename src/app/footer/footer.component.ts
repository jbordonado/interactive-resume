import { Component, OnInit } from '@angular/core';
import { Profile } from '../interface/profile.model';
import { ProfileService } from '../services/profile.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'jb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public profile: Profile;
  public copyrightDate = new Date().getFullYear();

  constructor(
    private profileService: ProfileService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
  }

  public notifyScrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
