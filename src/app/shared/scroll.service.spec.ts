import { TestBed } from '@angular/core/testing';
import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollService);
  });

  describe('scrollToTop', () => {
    it('should change current value of scroll observable to true', () => {
      service['scroll'].next(false);

      service['scroll'].subscribe((state) => {
        expect(state).toBe(true);
      });

      service.scrollToTop();
    });
  });

  describe('getScroll', () => {
    it('should return work experiences', () => {
      const scroll$ = service.getScroll();

      scroll$.subscribe((state) => expect(state).toBe(true));
      service['scroll'].next(true);
    });
  });
});
