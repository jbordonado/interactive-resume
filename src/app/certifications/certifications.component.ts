import { Component } from '@angular/core';
import { Certificate } from './certificate.model';
import { CertificationService } from './certification.service';

@Component({
  selector: 'jb-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {
  public certificates: Certificate[];

  constructor(private certificationService: CertificationService) {}

  ngOnInit(): void {
    this.certificates = this.certificationService.getCertificates();
  }
}
