import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostUrlService {
  // url = 'http://127.0.0.1:3000';
  url = 'https://gewinner-api.herokuapp.com';

  constructor() {
  }
}
