import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from './certificate.model';
import { CertificationService } from './certification.service';

@Component({
  selector: 'fc-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {
  public certificates$: Observable<Certificate[]>;

  constructor(private certificationService: CertificationService) {}

  ngOnInit(): void {
    this.certificates$ = this.certificationService.getCertificates();
  }
}
