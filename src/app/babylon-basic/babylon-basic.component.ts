import { Component, OnInit } from '@angular/core';
import {BabylonStart} from '../generic/babylon/BabylonStart';

@Component({
  selector: 'app-babylon-basic',
  templateUrl: './babylon-basic.component.html',
  styleUrls: ['./babylon-basic.component.css']
})
export class BabylonBasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvasElement = <HTMLCanvasElement>document.getElementById('babylon_basic_canvas');
    BabylonStart.startAndRunEngine(canvasElement);
  }

}
