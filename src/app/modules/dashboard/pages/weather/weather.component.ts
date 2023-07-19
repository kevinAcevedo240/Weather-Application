import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherByTime } from '../../models/weatherByTime';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { WeatherUseCase } from 'src/app/Domain/usecases/weather-usecases/weather.usecase';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private LATITUDE_DEFAULT: Number = 4.8133;
  private LONGITUDE_DEFAULT: Number = -75.6961;
  public weatherTime: WeatherByTime[] = [];

  constructor(public _WeatherUseCase : WeatherUseCase){}

  ngOnInit(): void {
    this._WeatherUseCase.getWeatherForecastByCoordinates(this.LATITUDE_DEFAULT.toString(), this.LONGITUDE_DEFAULT.toString())
      .subscribe((data) => {

        this.weatherTime = data.list.slice(0, 5).map((forecast) => {
          console.log(forecast)
          return {
            // icon: `../../../../../assets/icons/${forecast.weather[0].icon}.png`,
            icon: this.getWeatherIconUrl(forecast.weather[0].icon),
            Temperature: forecast.main.temp,
            description: forecast.dt_txt.split(' ')[1]
          };
        });
      });
  }

  // Función para obtener la URL del icono del clima
  getWeatherIconUrl(iconCode: string): string {
    return `../../../../../assets/WeatherIcons/${iconCode}.png`; // Reemplaza "example.com" por la URL correcta para los iconos
  }

  // weatherTime: WeatherByTime[] = [
  //   {
  //     icon:'../../../../../assets/icons/sun/26.png',
  //     Temperature: 298.15,
  //     description: '12 pm'
  //   },
  //   {
  //     icon:'../../../../../assets/icons/sun/13.png',
  //     Temperature: 298.15,
  //     description: '3 pm'
  //   },
  //   {
  //     icon:'../../../../../assets/icons/sun/13.png',
  //     Temperature: 296.15,
  //     description: '6 pm'
  //   },
  //   {
  //     icon:'../../../../../assets/icons/cloud/7.png',
  //     Temperature: 293.15,
  //     description: '9 pm'
  //   },
  //   {
  //     icon:'../../../../../assets/icons/moon/14.png',
  //     Temperature: 290.15,
  //     description: '12 am'
  //   },
  // ]


}
