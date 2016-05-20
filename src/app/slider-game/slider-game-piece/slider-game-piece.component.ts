import {SliderGamePiece} from '../../shared/slider-game-piece.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'slider-game-piece',
  templateUrl: 'slider-game-piece.component.html',
  styleUrls: ['slider-game-piece.component.css']
})
export class SliderGamePieceComponent implements OnInit {
  @Input() gamePiece: SliderGamePiece;
  constructor() {}

  ngOnInit() {

  }

}
