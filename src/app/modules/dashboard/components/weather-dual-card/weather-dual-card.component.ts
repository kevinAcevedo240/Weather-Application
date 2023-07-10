import { Component, Input } from '@angular/core';
import { Weather } from '../../models/weather';

@Component({
  selector: '[weather-dual-card]',
  templateUrl: './weather-dual-card.component.html',
  styleUrls: ['./weather-dual-card.component.scss']
})
export class WeatherDualCardComponent {
  @Input() weather: Weather = <Weather>{};
}
