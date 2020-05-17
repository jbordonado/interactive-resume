import { TestBed } from '@angular/core/testing';
import { CertificationService } from './certification.service';
import { CERTIFICATES } from './mock-certificates';

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
