import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherByTime } from '../../models/weatherByTime';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherTime: WeatherByTime[] = [
    {
      icon:'../../../../../assets/icons/sun/26.png',
      Temperature: 31,
      description: '12 pm'
    },
    {
      icon:'../../../../../assets/icons/sun/13.png',
      Temperature: 25,
      description: '3 pm'
    },
    {
      icon:'../../../../../assets/icons/sun/13.png',
      Temperature: 23,
      description: '6 pm'
    },
    {
      icon:'../../../../../assets/icons/cloud/7.png',
      Temperature: 20,
      description: '9 pm'
    },
    {
      icon:'../../../../../assets/icons/moon/14.png',
      Temperature: 17,
      description: '12 am'
    },
  ]


  ngOnInit(): void {}

}
