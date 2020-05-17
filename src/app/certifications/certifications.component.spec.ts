import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CertificationService } from './certification.service';
import { CertificationsComponent } from './certifications.component';
import { CERTIFICATES } from './mock-certificates';

describe('CertificationsComponent', () => {
  let component: CertificationsComponent;
  let fixture: ComponentFixture<CertificationsComponent>;

  let certificationService: CertificationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [CertificationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificationsComponent);
    component = fixture.componentInstance;
  }));

  describe('ngOnInit', () => {
    it('should define certificates$ with certificates from certification service', () => {
      certificationService = TestBed.inject(CertificationService);
      spyOn(certificationService, 'getCertificates').and.returnValue(
        of(CERTIFICATES.slice(0, 2))
      );

      fixture.detectChanges();

      component.certificates$.subscribe((exp) =>
        expect(exp).toEqual(CERTIFICATES.slice(0, 2))
      );
    });
  });
});
