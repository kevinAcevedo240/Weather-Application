import { TestBed } from '@angular/core/testing';

import { OpenWeatherMapAdapterService } from './open-weather-map-adapter.service';

describe('OpenWeatherMapAdapterService', () => {
  let service: OpenWeatherMapAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenWeatherMapAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
