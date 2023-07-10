import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSingleCardComponent } from './weather-single-card.component';

describe('WeatherSingleCardComponent', () => {
  let component: WeatherSingleCardComponent;
  let fixture: ComponentFixture<WeatherSingleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherSingleCardComponent]
    });
    fixture = TestBed.createComponent(WeatherSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
