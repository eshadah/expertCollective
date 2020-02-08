import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menunav',
  templateUrl: './menunav.component.html',
  styleUrls: ['./menunav.component.scss']
})
export class MenunavComponent implements OnInit {

  navLinks: string[] = [
    "advisory", "praxis", "ventures", "contact-us"
  ]

  constructor() { }

  ngOnInit() {
  }

}
