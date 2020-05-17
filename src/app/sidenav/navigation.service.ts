import { Injectable } from '@angular/core';
import { NAVIGATION_ITEMS } from './mock-navigation';
import { NavigationItem } from './navigation.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public getNavigationItems(): NavigationItem[] {
    return NAVIGATION_ITEMS;
  }
}
