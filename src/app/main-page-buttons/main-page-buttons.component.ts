import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page-buttons',
  templateUrl: './main-page-buttons.component.html',
  styleUrls: ['./main-page-buttons.component.css']
})
export class MainPageButtonsComponent implements OnInit {
  public buttonList = [
    'webgl',
    '3Dgames'
    ];

  constructor() { }

  ngOnInit() {
  }

}
