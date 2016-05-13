import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SliderAppComponent } from '../app/slider.component';

beforeEachProviders(() => [SliderAppComponent]);

describe('App: Slider', () => {
  it('should create the app',
      inject([SliderAppComponent], (app: SliderAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'slider works!\'',
      inject([SliderAppComponent], (app: SliderAppComponent) => {
    expect(app.title).toEqual('slider works!');
  }));
});
