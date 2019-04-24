import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  logged = new Subject<boolean>();

  constructor() {
    this.logged.next(false);
  }
}
