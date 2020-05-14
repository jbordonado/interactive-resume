import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'jb-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profile: Profile;
  public age: number;
  public currentJobTitle: string;
  public workingYears: number;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService
      .getProfile()
      .pipe(first())
      .subscribe((profile) => {
        this.profile = profile;
        this.age = this.calculateAge();
      });
    this.currentJobTitle = 'Fullstack developer';
    this.workingYears = 3;
  }

  private calculateAge(): number {
    const timeDiffInMs = Math.abs(
      Date.now() - this.profile.birthDate.getTime()
    );
    const dayInMs = 1000 * 3600 * 24;
    const yearInMs = 365.25 * dayInMs;
    return Math.floor(timeDiffInMs / yearInMs);
  }
}
