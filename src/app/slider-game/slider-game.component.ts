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
  gamePieces: SliderGamePiece[] = [];
  gameRows: SliderGameBoardRow[] = [];

  numberOfPieces: number;
  numberOfRows: number;
  numberOfColumns: number;
  constructor() {
    this.numberOfPieces = 9;
    this.numberOfRows = 3;
    this.numberOfColumns = 3;
  }

  ngOnInit() {
    // Create game board spots
    for(let row = 0; row < this.numberOfRows; row++) {
      let columns = [];
      for(let col = 0; col < this.numberOfColumns; col++) {
        let spot = new SliderGameBoardSpot(row, col);
        columns.push(spot);
      }
      this.gameRows.push(new SliderGameBoardRow(columns, row));
    }
    // Create game pieces
    for(var myNumber = 1; myNumber < this.numberOfPieces; myNumber++) {
      this.gamePieces.push(new SliderGamePiece(myNumber.toString(), myNumber-1));
    }
  }

}

class SliderGameBoardRow {
  constructor(public columns: SliderGameBoardSpot[], rowNumber: number) {

  }
}

class SliderGameBoardSpot {
  public gamePiece:SliderGamePiece;
  constructor(public row:number, public column:number){
    console.log('game spot: ' + row + ',' + column);
  }
}