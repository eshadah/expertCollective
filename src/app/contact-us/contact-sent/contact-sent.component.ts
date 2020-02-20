import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-sent',
  templateUrl: './contact-sent.component.html',
  styleUrls: ['./contact-sent.component.scss']
})
export class ContactSentComponent implements OnInit {
  @Output() contactInfoSent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClickBack() {
    this.contactInfoSent.emit(false);
  }
}
