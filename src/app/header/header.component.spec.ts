import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollService } from '../shared/scroll.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let scrollService: ScrollService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  }));

  describe('onMenuClick', () => {
    it('should emit a menuButtonClick event', () => {
      spyOn(component.menuButtonClick, 'emit');

      component.onMenuClick();

      expect(component.menuButtonClick.emit).toHaveBeenCalled();
    });
  });

  describe('onTitleClick', () => {
    it('should call scrolLToTop from scroll service', () => {
      scrollService = TestBed.inject(ScrollService);
      spyOn(scrollService, 'scrollToTop');

      component.onTitleClick();

      expect(scrollService.scrollToTop).toHaveBeenCalled();
    });
  });
});
