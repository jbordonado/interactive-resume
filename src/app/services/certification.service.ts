import { Injectable } from '@angular/core';
import { CERTIFICATES } from '../app.constants';
import { Certificate } from '../interface/certificate.model';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  public getCertificates(): Certificate[] {
    return CERTIFICATES;
  }
}
