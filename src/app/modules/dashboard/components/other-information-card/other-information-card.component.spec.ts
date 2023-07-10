import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInformationCardComponent } from './other-information-card.component';

describe('OtherInformationCardComponent', () => {
  let component: OtherInformationCardComponent;
  let fixture: ComponentFixture<OtherInformationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherInformationCardComponent]
    });
    fixture = TestBed.createComponent(OtherInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
