import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SliderGamePieceComponent } from './slider-game-piece.component';

describe('Component: SliderGamePiece', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SliderGamePieceComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SliderGamePieceComponent],
      (component: SliderGamePieceComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SliderGamePieceComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SliderGamePieceComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <slider-game-piece></slider-game-piece>
  `,
  directives: [SliderGamePieceComponent]
})
class SliderGamePieceComponentTestController {
}

