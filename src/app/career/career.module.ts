import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { WorkExperienceComponent } from './experience/work-experience.component';

@NgModule({
  declarations: [CareerComponent, WorkExperienceComponent],
  imports: [CareerRoutingModule, CommonModule, MatCardModule],
})
export class CareerModule {}
