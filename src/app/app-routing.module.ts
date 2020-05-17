import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusComponent } from './bonus/bonus.component';
import { CareerComponent } from './career/career.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EducationComponent } from './education/education.component';
import { ProfileComponent } from './profile/profile.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'education', component: EducationComponent },
  { path: 'career', component: CareerComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'bonus', component: BonusComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
