import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public publishMessage = new BehaviorSubject<string>("");

  constructor() { }

  showAlert(message: string) {
    alert(message);
  }
}
