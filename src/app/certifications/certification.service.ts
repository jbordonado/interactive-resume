import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Certificate } from './certificate.model';
import { CERTIFICATES } from './mock-certificates';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  public getCertificates(): Observable<Certificate[]> {
    return of(CERTIFICATES);
  }
}
