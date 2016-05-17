import {SliderGamePieceComponent} from './slider-game-piece/slider-game-piece.component';
import { Component, OnInit, Input } from '@angular/core';
import {SliderGamePiece} from '../shared/slider-game-piece.class';

@Component({
  moduleId: module.id,
  selector: 'slider-game',
  templateUrl: 'slider-game.component.html',
  styleUrls: ['slider-game.component.css'],
  directives: [SliderGamePieceComponent]
})
export class SliderGameComponent implements OnInit {
  public gamePieces: SliderGamePiece[] = [];
  @Input() numberOfPieces: number;
  constructor() {}

  ngOnInit() {
    for(var myNumber = 1; myNumber < this.numberOfPieces; myNumber++) {
      this.gamePieces.push(new SliderGamePiece(myNumber.toString(), myNumber-1));
    }
  }

}
