import { TestBed } from '@angular/core/testing';
import { NAVIGATION_ITEMS } from './mock-navigation';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationService);
  });

  describe('getNavigationItems', () => {
    it('should return the navigation items', () => {
      const navigationItems = service.getNavigationItems();

      expect(navigationItems).toEqual(NAVIGATION_ITEMS);
    });
  });
});
