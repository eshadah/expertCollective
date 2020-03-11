import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isResponsiveOpen: boolean = false;

  constructor() { }
  
  imgSource = '../../../assets/imgs/eclogo.png'
  imgAlt = 'eclogo'

  ngOnInit() {
  }

  onMenuBarsClick() {
    this.isResponsiveOpen = !this.isResponsiveOpen;
    console.log('isResponsiveOpen = ' + this.isResponsiveOpen);
  }

}
