import { Component, Input } from '@angular/core';
import { Certificate } from '../certificate.model';

@Component({
  selector: 'jb-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  @Input() certificate: Certificate;
}
