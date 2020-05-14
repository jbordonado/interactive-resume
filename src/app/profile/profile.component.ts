import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Profile } from '../shared/profile.model';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'jb-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profile: Profile;
  public subTitle: string;
  public age: number;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService
      .getProfile()
      .pipe(first())
      .subscribe((profile) => {
        this.profile = profile;
        this.age = this.calculateAge();
      });

    this.subTitle = this.createSubTitle();
  }

  private calculateAge(): number {
    const timeDiffInMs = Math.abs(
      Date.now() - this.profile.birthDate.getTime()
    );
    const dayInMs = 1000 * 3600 * 24;
    const yearInMs = 365.25 * dayInMs;
    return Math.floor(timeDiffInMs / yearInMs);
  }

  private createSubTitle(): string {
    const currentJobTitle = 'Fullstack developer';
    const workingYears = 3;
    return `${currentJobTitle} (+ ${workingYears} years experience)`;
  }
}
