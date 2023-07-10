import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCountriesMapCardComponent } from './world-countries-map-card.component';

describe('WorldCountriesMapCardComponent', () => {
  let component: WorldCountriesMapCardComponent;
  let fixture: ComponentFixture<WorldCountriesMapCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldCountriesMapCardComponent]
    });
    fixture = TestBed.createComponent(WorldCountriesMapCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
