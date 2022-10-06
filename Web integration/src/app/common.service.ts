import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  isLogin() {
    let token = localStorage.getItem("user_token");
    if (token != "" || token != undefined) {
      //navigate to login page.
      return true;
    }
    return false;
  }
  storeToken(token: string) {
    localStorage.setItem("user_token", token);
  }
  storeEmail(email: string) {
    localStorage.setItem("email", email);
  }
  postHttp(url: string, param: {}) {
    let token = "" + localStorage.getItem("user_token");
    let email = "" + localStorage.getItem("email");
    let header = new HttpHeaders().set("email", email).set("token", token);
    return this.http.post("http://localhost:8080/" + url, param, { 'headers': header })
  }
}
