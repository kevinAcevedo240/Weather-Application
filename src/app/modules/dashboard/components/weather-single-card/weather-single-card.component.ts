import { Component, Input } from '@angular/core';
import { Weather } from '../../models/weather';

@Component({
  selector: '[weather-single-card]',
  templateUrl: './weather-single-card.component.html',
  styleUrls: ['./weather-single-card.component.scss']
})
export class WeatherSingleCardComponent {
  @Input() weather: Weather = <Weather>{};

  constructor(){}
}
