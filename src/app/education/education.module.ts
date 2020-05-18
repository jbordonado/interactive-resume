import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';
import { SchoolExperienceComponent } from './experience/school-experience.component';

@NgModule({
  declarations: [EducationComponent, SchoolExperienceComponent],
  imports: [EducationRoutingModule, CommonModule, MatCardModule],
})
export class EducationModule {}
