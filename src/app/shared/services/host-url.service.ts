import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostUrlService {
  url = 'http://127.0.0.1:3000';

  constructor() {
  }
}
