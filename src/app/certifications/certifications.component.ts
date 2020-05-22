import { Component } from '@angular/core';
import { Certificate } from '../interface/certificate.model';
import { CertificationService } from '../services/certification.service';

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
