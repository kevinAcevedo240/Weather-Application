import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherByHourCardComponent } from './weather-by-hour-card.component';

describe('WeatherByHourCardComponent', () => {
  let component: WeatherByHourCardComponent;
  let fixture: ComponentFixture<WeatherByHourCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherByHourCardComponent]
    });
    fixture = TestBed.createComponent(WeatherByHourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
