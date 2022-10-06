import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myname = "this is simple value for this variable";
  myaddres = 'this is simple address';
  text_name = "";
  text_name1 = "";
  isShow = false;
  cssCLassName = "title";
  curentDate = new Date();
  price = 10;
  num = 45;
  person_name = '';
  job_name = '';
  people = [
    { name: "Testname", "age": 35 },
    { name: "Testname1", "age": 47 },
    { name: "Testname2", "age": 45 },
    { name: "Testname3", "age": 33 }
  ];
  serverData: any = [];
  constructor(private common: CommonService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  changeClassName(classname: string) {
    this.cssCLassName = classname;
  }
  getHttpUrl() {
    this.http.get("https://reqres.in/api/users?page=2")
      .subscribe((res: any) => {
        console.log(res);
        this.serverData = res['data'];
      })
  }
  postHttpUrl() {
    if (this.person_name == "") {
      alert("Person Name is empty");
      return;
    }
    if (this.job_name == "") {
      alert("job Name is empty");
      return;
    }
    let param = {
      "name": this.person_name,
      "job": this.job_name
    }
    const headers = new HttpHeaders()
      .set('token', 'sample token')
      .set('user_id', '45');
    this.http.post("https://reqres.in/api/users", param,
      { 'headers': headers })
      .subscribe((res: any) => {
        console.log(res);
      })
  }
  showAndHide() {
    // if(this.isShow){
    //   this.isShow = false;
    // }else{
    //   this.isShow = true;
    // }
    this.isShow = !this.isShow;
  }
  showAlert() {
    if (this.text_name == "") {
      this.common.showAlert("Name should not be empty");
    }
    else if (this.text_name1 == "") {
      this.common.showAlert("Age should not be empty");
    } else {
      this.common.showAlert("everything is ok.");
    }
    // alert("you clicked me");
  }

}
