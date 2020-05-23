import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';
import { SwUpdate } from '@angular/service-worker';
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
    private scrollService: ScrollService,
    private snackBar: MatSnackBar,
    private swUpdate: SwUpdate
  ) {}

  ngOnInit(): void {
    this.updateSiteData();
    this.setupScrollSubscription();
    if (this.swUpdate.isEnabled) {
      this.setupServiceWorkerUpdateSubscription();
    }
  }

  private updateSiteData(): void {
    this.titleService.setTitle($localize`Jordan BORDONADO resume`);
    this.meta.updateTag({
      name: 'Description',
      content: $localize`Resume of a fullstack engineer with 3 years of experience working in Sophia Antipolis (France).`,
    });
    this.meta.updateTag({
      name: 'keywords',
      content: $localize`personal website, resume, interactive resume, engineer, fullstack, sophia-antipolis, developer`,
    });
  }

  private setupServiceWorkerUpdateSubscription(): void {
    this.swUpdate.available.subscribe(() => {
      const snackBarRef = this.snackBar.open(
        'Newer version of the app is available',
        'Refresh'
      );

      snackBarRef.onAction().subscribe(() => {
        window.location.reload();
      });
    });
  }

  private setupScrollSubscription(): void {
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
