import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../interface/experience.model';
import { Profile } from '../interface/profile.model';
import { ExperienceService } from '../services/experience.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'jb-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profile: Profile;
  public subTitle: string;
  public age: number;

  constructor(
    private profileService: ProfileService,
    private experienceService: ExperienceService
  ) {}

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
    this.age = this.calculateYearsFromNow(this.profile.birthDate);
    this.subTitle = this.createSubTitle();
  }

  private createSubTitle(): string {
    const latestWorkExperience: WorkExperience = this.experienceService.getWorkExperiences()[0];
    const currentJobTitle = latestWorkExperience.jobTitle;

    const workingYears = this.getTotalYearsWorking();
    return $localize`${currentJobTitle} (+${workingYears} years experience)`;
  }

  private getTotalYearsWorking(): number {
    const totalTimeWorking = this.experienceService
      .getWorkExperiences()
      .reduce((acc, exp) => {
        const endDateTime = exp.endDate ? exp.endDate.getTime() : Date.now();
        return acc + (endDateTime - exp.startDate.getTime());
      }, 0);

    return this.convertMilliSecondsToYear(totalTimeWorking);
  }

  private calculateYearsFromNow(date: Date): number {
    const timeDiffInMs = Math.abs(Date.now() - date.getTime());
    return this.convertMilliSecondsToYear(timeDiffInMs);
  }

  private convertMilliSecondsToYear(timeInMs: number): number {
    const dayInMs = 1000 * 3600 * 24;
    const yearInMs = 365.25 * dayInMs;
    return Math.floor(timeInMs / yearInMs);
  }
}
