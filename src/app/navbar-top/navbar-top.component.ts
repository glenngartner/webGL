import { Component, OnInit } from '@angular/core';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFire} from '@fortawesome/free-solid-svg-icons';

library.add(faFire);

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
