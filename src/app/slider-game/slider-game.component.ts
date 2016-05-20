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
  emptyLocation: SliderGameBoardSpot;

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
    let gamePieceNumber = 0;
    for(let row = 0; row < this.numberOfRows; row++) {
      let columns = [];
      for(let col = 0; col < this.numberOfColumns; col++) {
        let spot = new SliderGameBoardSpot(row, col);
        spot.gamePiece = new SliderGamePiece(gamePieceNumber);
        if (gamePieceNumber === 0) {
          this.emptyLocation = spot;
        }
        columns.push(spot);
        gamePieceNumber++;
      }
      this.gameRows.push(new SliderGameBoardRow(columns, row));
    }
  }

  pieceClicked(spot: SliderGameBoardSpot) {
    if(spot.isAdjacent(this.emptyLocation)) {
      // Switch spots
      let emptyPiece = this.emptyLocation.gamePiece;
      this.emptyLocation.gamePiece = spot.gamePiece;
      spot.gamePiece = emptyPiece;
      this.emptyLocation = spot;
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

  /**
   * Determines if spot is adjacent to another spot
   */
  isAdjacent(spot: SliderGameBoardSpot) :boolean {
    if (this.row === spot.row && this.column === spot.column) {
      return false; // Same spot is not adjacent
    }
    let rowDiff = Math.abs(this.row - spot.row);
    let colDiff = Math.abs(this.column - spot.column);
    if (rowDiff !== 2 && colDiff !== 2 && (rowDiff === 0 || colDiff === 0)) {
      return true;
    }
    return false;
  }
}