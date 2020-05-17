import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollService } from '../shared/scroll.service';
import { NAVIGATION_ITEMS } from './mock-navigation';
import { NavigationItem } from './navigation.model';
import { NavigationService } from './navigation.service';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  let navigationService: NavigationService;
  let scrollService: ScrollService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [SidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
  }));

  describe('ngOnInit', () => {
    it('should define the navigation items with the navigation service', () => {
      navigationService = TestBed.inject(NavigationService);
      spyOn(navigationService, 'getNavigationItems').and.returnValue(
        NAVIGATION_ITEMS
      );

      fixture.detectChanges();

      expect(component.navigationItems).toEqual(NAVIGATION_ITEMS);
    });
  });

  describe('ngOnChanges', () => {
    it('should define isOpen with isSidebarOpen input', () => {
      component.isSidebarOpen = true;

      component.ngOnChanges({});

      expect(component.isOpen).toBe(true);
    });
  });

  describe('isIcon', () => {
    it('should return true if the image type is equal to icon', () => {
      const iconNavItem: NavigationItem = {
        name: 'Profile',
        route: '/profile',
        image: {
          type: 'icon',
          value: 'perm_identity',
        },
      };

      const isIcon = component.isIcon(iconNavItem);

      expect(isIcon).toBe(true);
    });

    it('should return true if the image type is equal to icon', () => {
      const imgNavItem: NavigationItem = {
        name: 'Home',
        route: '/',
        image: {
          type: 'img',
          value: 'assets/home_outline.svg',
        },
      };

      const isIcon = component.isIcon(imgNavItem);

      expect(isIcon).toBe(false);
    });
  });

  describe('closeSidenav', () => {
    it('should emit a sidenavToggle event and call scrollToTop from scroll service', () => {
      spyOn(component.sidenavToggle, 'emit');
      scrollService = TestBed.inject(ScrollService);
      spyOn(scrollService, 'scrollToTop');

      component.closeSidenav();

      expect(component.sidenavToggle.emit).toHaveBeenCalled();
      expect(scrollService.scrollToTop).toHaveBeenCalled();
    });
  });
});
