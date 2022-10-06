import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message = '';
  constructor(private common: CommonService) {
    this.common.publishMessage.subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit(): void {
  }
  recvMessage(ev: string) {
    this.message = ev;
    //console.log(ev);
  }

}
