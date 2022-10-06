import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  txt = ''
  @Output() toParent = new EventEmitter();
  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }
  sendToParent() {
    this.toParent.emit(this.txt);
  }
  publishMessage() {
    this.common.publishMessage.next(this.txt);
  }
}
