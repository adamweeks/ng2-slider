import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SliderGameServiceService } from './slider-game-service.service';

describe('SliderGameService Service', () => {
  beforeEachProviders(() => [SliderGameServiceService]);

  it('should ...',
      inject([SliderGameServiceService], (service: SliderGameServiceService) => {
    expect(service).toBeTruthy();
  }));
});
