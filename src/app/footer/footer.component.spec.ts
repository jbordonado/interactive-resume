import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PROFILE } from '../shared/mock-profiles';
import { ProfileService } from '../shared/profile.service';
import { ScrollService } from '../shared/scroll.service';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  let profileService: ProfileService;
  let scrollService: ScrollService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  }));

  describe('ngOnInit', () => {
    it('should define profile$ with data from experience service', () => {
      profileService = TestBed.inject(ProfileService);
      spyOn(profileService, 'getProfile').and.returnValue({ ...PROFILE });

      fixture.detectChanges();

      expect(component.profile).toEqual(PROFILE);
    });
  });

  describe('notifyScrollToTop', () => {
    it('should call scrollToTop from scroll service', () => {
      scrollService = TestBed.inject(ScrollService);
      spyOn(scrollService, 'scrollToTop');

      component.notifyScrollToTop();

      expect(scrollService.scrollToTop).toHaveBeenCalled();
    });
  });
});
