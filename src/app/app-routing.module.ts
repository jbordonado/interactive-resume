import { NgModule } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {
  NavigationEnd,
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'education',
    loadChildren: () =>
      import('./education/education.module').then((m) => m.EducationModule),
  },
  {
    path: 'career',
    loadChildren: () =>
      import('./career/career.module').then((m) => m.CareerModule),
  },
  {
    path: 'certifications',
    loadChildren: () =>
      import('./certifications/certifications.module').then(
        (m) => m.CertificationsModule
      ),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: 'bonus',
    loadChildren: () =>
      import('./bonus/bonus.module').then((m) => m.BonusModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router, private meta: Meta) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.isHomePage()) {
          this.meta.removeTag("name='robots'");
        } else {
          this.meta.addTag({ name: 'robots', content: 'noindex' });
        }
      }
    });
  }

  private isHomePage(): boolean {
    return this.router.url === '/';
  }
}
