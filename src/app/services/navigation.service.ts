import { Injectable } from '@angular/core';
import { LANGUAGE_ITEMS, SECTION_ITEMS } from '../app.constants';
import { NavigationItem } from '../interface/navigation.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public getSectionItems(): NavigationItem[] {
    return SECTION_ITEMS;
  }

  public getLanguageItems(): NavigationItem[] {
    return LANGUAGE_ITEMS;
  }
}
