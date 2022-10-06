import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() message = "";
  @Input() currentMenu = "";
  constructor(private common: CommonService) {
    this.common.publishMessage.subscribe(res => {
      console.log(res);
    })
  }
  ngOnInit(): void {
  }

}
