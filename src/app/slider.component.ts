import { Component, OnInit } from '@angular/core';
import {SliderGameComponent} from './slider-game/slider-game.component';

@Component({
  moduleId: module.id,
  selector: 'slider-app',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css'],
  directives: [SliderGameComponent],
})

export class SliderAppComponent implements OnInit {
  title = 'slider works!';

  constructor() {

  }

  ngOnInit() {

  }
}
