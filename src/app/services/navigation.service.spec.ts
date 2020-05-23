import { TestBed } from '@angular/core/testing';
import { LANGUAGE_ITEMS, SECTION_ITEMS } from '../app.constants';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationService);
  });

  describe('getSectionItems', () => {
    it('should return the section items defined as a constant', () => {
      const sectionItems = service.getSectionItems();

      expect(sectionItems).toEqual(SECTION_ITEMS);
    });
  });

  describe('getLanguageItems', () => {
    it('should return the language items defined as a constant', () => {
      const languageItems = service.getLanguageItems();

      expect(languageItems).toEqual(LANGUAGE_ITEMS);
    });
  });
});
