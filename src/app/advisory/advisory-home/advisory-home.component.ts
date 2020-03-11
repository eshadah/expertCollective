import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advisory-home',
  templateUrl: './advisory-home.component.html',
  styleUrls: ['./advisory-home.component.scss']
})
export class AdvisoryHomeComponent implements OnInit {

  constructor() { }
  imgSource = '../../../assets/imgs/imgholdr.png'
  imgAlt = 'Imageholder'
  ngOnInit() {
  }

}
