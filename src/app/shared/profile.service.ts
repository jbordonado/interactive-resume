import { Injectable } from '@angular/core';
import { PROFILE } from './mock-profiles';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public getProfile(): Profile {
    return PROFILE;
  }
}
