import { TestBed } from '@angular/core/testing';
import { SECTION_ITEMS } from '../app.constants';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationService);
  });

  describe('getNavigationItems', () => {
    it('should return the navigation items', () => {
      const navigationItems = service.getSectionItems();

      expect(navigationItems).toEqual(SECTION_ITEMS);
    });
  });
});
