import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isResponsiveOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMenuBarsClick() {
    this.isResponsiveOpen = !this.isResponsiveOpen;
    console.log('isResponsiveOpen = ' + this.isResponsiveOpen);
  }

}
