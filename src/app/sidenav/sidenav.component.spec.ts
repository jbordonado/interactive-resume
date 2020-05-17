import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [SidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
  }));

  describe('ngOnChanges', () => {
    it('should define isOpen with isSidebarOpen input', () => {
      component.isSidebarOpen = true;

      component.ngOnChanges({});

      expect(component.isOpen).toBe(true);
    });
  });

  describe('closeSidenav', () => {
    it('should emit a sidenavToggle event', () => {
      spyOn(component.sidenavToggle, 'emit');

      component.closeSidenav();

      expect(component.sidenavToggle.emit).toHaveBeenCalled();
    });
  });
});
