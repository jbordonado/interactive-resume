import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { LANGUAGE_ITEMS, SECTION_ITEMS } from '../app.constants';
import { NavigationService } from '../services/navigation.service';
import { ScrollService } from '../services/scroll.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let titleService: Title;
  let navigationService: NavigationService;
  let scrollService: ScrollService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatTooltipModule, RouterTestingModule],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  }));

  describe('ngOnInit', () => {
    it('should define homeNavigationItems and languageItems with the navigation service', () => {
      navigationService = TestBed.inject(NavigationService);
      spyOn(navigationService, 'getSectionItems').and.returnValue(
        SECTION_ITEMS
      );
      spyOn(navigationService, 'getLanguageItems').and.returnValue(
        LANGUAGE_ITEMS
      );

      fixture.detectChanges();

      expect(component.homeNavigationItem).toEqual(SECTION_ITEMS[0]);
      expect(component.languagesItem).toEqual(LANGUAGE_ITEMS);
    });
  });

  describe('onMenuClick', () => {
    it('should emit a menuButtonClick event', () => {
      spyOn(component.menuButtonClick, 'emit');

      component.onMenuClick();

      expect(component.menuButtonClick.emit).toHaveBeenCalled();
    });
  });

  describe('onTitleClick', () => {
    it('should call scrolLToTop from scroll service', () => {
      component.homeNavigationItem = SECTION_ITEMS[0];
      titleService = TestBed.inject(Title);
      spyOn(titleService, 'setTitle');
      scrollService = TestBed.inject(ScrollService);
      spyOn(scrollService, 'scrollToTop');

      component.onTitleClick();

      expect(titleService.setTitle).toHaveBeenCalledWith(
        $localize`Jordan BORDONADO resume - Home`
      );
      expect(scrollService.scrollToTop).toHaveBeenCalled();
    });
  });
});
