import { Injectable } from '@angular/core';
import { Certificate } from './certificate.model';
import { CERTIFICATES } from './mock-certificates';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  public getCertificates(): Certificate[] {
    return CERTIFICATES;
  }
}
