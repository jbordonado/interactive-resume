import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CertificateComponent } from './certificate/certificate.component';
import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationsComponent } from './certifications.component';

@NgModule({
  declarations: [CertificationsComponent, CertificateComponent],
  imports: [
    CertificationsRoutingModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class CertificationsModule {}
