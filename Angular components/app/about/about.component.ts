import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  people: any = [
    { name: "lion", "age": 35 },
    { name: "alpha", "age": 47 },
    { name: "zebra", "age": 45 },
    { name: "elephant", "age": 33 },
    { name: "tiger", "age": 33 },
    { name: "tcs", "age": 33 }

  ];
  name = "";
  constructor() { }

  ngOnInit(): void {
  }

}
