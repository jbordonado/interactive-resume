import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isSidebarOpen: boolean;

  private destroy$ = new Subject();

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService
      .getScroll()
      .pipe(takeUntil(this.destroy$))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .subscribe((_state) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  public toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }
}
