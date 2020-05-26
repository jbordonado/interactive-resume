import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private titleService: Title,
    private meta: Meta,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.updateSiteData();
    this.scrollService
      .getScroll()
      .pipe(takeUntil(this.destroy$))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .subscribe((_state) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  private updateSiteData(): void {
    this.titleService.setTitle($localize`Jordan BORDONADO resume`);
    this.meta.updateTag({
      name: 'Description',
      content: $localize`I'm Jordan BORDONADO, an experienced engineer in web development working in Sophia-Antipolis (France).`,
    });
    this.meta.updateTag({
      name: 'keywords',
      content: $localize`personal website, resume, interactive resume, engineer, fullstack, sophia-antipolis, developer, web developer`,
    });
  }

  public toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }
}
