import { Injectable } from '@angular/core';
import { PROFILE } from '../app.constants';
import { Profile } from '../interface/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public getProfile(): Profile {
    return PROFILE;
  }
}
