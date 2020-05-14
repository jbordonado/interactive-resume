import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROFILE } from './mock-profiles';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public getProfile(): Observable<Profile> {
    return of(PROFILE);
  }
}
