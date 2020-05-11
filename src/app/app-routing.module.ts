import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'miscellaneous', component: MiscellaneousComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
