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
    {name: 'Home', icon: '', routePath: 'home'},
    {name: 'Games', icon: 'gamepad', routePath: 'babylonGames'},
    {name: 'Apps', icon: '', routePath: 'appsPage'},
    {name: 'Art', icon: '', routePath: 'gameArtPage'},
    {name: 'WebGL', icon: 'book-open', routePath: 'webgl'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
