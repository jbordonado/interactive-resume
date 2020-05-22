import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scroll = new Subject<boolean>();

  public scrollToTop(): void {
    this.scroll.next(true);
  }

  public getScroll(): Observable<boolean> {
    return this.scroll.asObservable();
  }
}
