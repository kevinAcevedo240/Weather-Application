import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDualCardComponent } from './weather-dual-card.component';

describe('WeatherDualCardComponent', () => {
  let component: WeatherDualCardComponent;
  let fixture: ComponentFixture<WeatherDualCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDualCardComponent]
    });
    fixture = TestBed.createComponent(WeatherDualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
