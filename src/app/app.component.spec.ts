import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ScrollService } from './services/scroll.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let scrollService: ScrollService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  describe('ngOnInit', () => {
    it('should call window scrollTo whenever a new value is received from scroll service observable', () => {
      scrollService = TestBed.inject(ScrollService);
      spyOn(scrollService, 'getScroll').and.returnValue(of(true));
      spyOn(window, 'scrollTo');

      fixture.detectChanges();

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });

  describe('toggleSidebar', () => {
    it('should define isSidebarOpen with its opposite value', () => {
      component.toggleSidebar();
      expect(component.isSidebarOpen).toBe(true);
      component.toggleSidebar();
      expect(component.isSidebarOpen).toBe(false);
    });
  });
});
