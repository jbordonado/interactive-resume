import { TestBed } from '@angular/core/testing';
import { CERTIFICATES } from '../app.constants';
import { CertificationService } from './certification.service';

describe('CertificationService', () => {
  let service: CertificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificationService);
  });

  describe('getCertificates', () => {
    it('should return certificates', () => {
      const certificates = service.getCertificates();

      expect(certificates).toEqual(CERTIFICATES);
    });
  });
});
