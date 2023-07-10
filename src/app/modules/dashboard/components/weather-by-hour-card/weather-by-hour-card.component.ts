import { Component, Input } from '@angular/core';
import { WeatherByTime } from '../../models/weatherByTime';

@Component({
  selector: 'weather-by-hour-card',
  templateUrl: './weather-by-hour-card.component.html',
  styleUrls: ['./weather-by-hour-card.component.scss']
})
export class WeatherByHourCardComponent {
  @Input('weatherByTime') time: WeatherByTime = {
    icon:'',
    Temperature: 0,
    description: '',
  }
}
