import {Component, OnInit} from '@angular/core';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faGamepad, faBookOpen} from '@fortawesome/free-solid-svg-icons';

library.add(faGamepad, faBookOpen);

interface Button {
  name: string;
  icon: string;
  routePath: string;
}

@Component({
  selector: 'app-main-page-buttons',
  templateUrl: './main-page-buttons.component.html',
  styleUrls: ['./main-page-buttons.component.css']
})
export class MainPageButtonsComponent implements OnInit {
  public buttonList: Button[] = [
    {name: 'WebGL', icon: 'book-open', routePath: 'webgl'},
    {name: '3D Games', icon: 'gamepad', routePath: 'babylonGames'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
