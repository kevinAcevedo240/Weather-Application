import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherByTime } from '../../models/weatherByTime';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { WeatherUseCase } from 'src/app/Domain/usecases/weather-usecases/weather.usecase';
import { getWeatherIconUrl } from 'src/app/modules/shared/Util/utils';
import { WeatherData } from 'src/app/Domain/entities/WeatherData';
import { first } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private LATITUDE_DEFAULT: Number = 4.8133;
  private LONGITUDE_DEFAULT: Number = -75.6961;
  public weatherTime: WeatherByTime[] = [];
  public currentWeatherData: WeatherData | null = null;

  constructor(public _WeatherUseCase : WeatherUseCase){}

  ngOnInit(): void {
    // Comprueba si el observable CurrentForecast$ tiene un valor
    this._WeatherUseCase.CurrentForecast$.pipe().subscribe((forecastData) => {
      if (!forecastData) {
        // Si no tiene valor, obtiene los datos del forecast por defecto
        this.getWeatherForecastByCoordinates(this.LATITUDE_DEFAULT.toString(), this.LONGITUDE_DEFAULT.toString());
      } else {
        // Si ya tiene valor, utiliza esos datos
        this.weatherTime = forecastData.list.slice(0, 5).map((forecast) => {
          console.log(forecast);
          return {
            icon: getWeatherIconUrl(forecast.weather[0].icon),
            Temperature: forecast.main.temp,
            description: forecast.weather[0].description,
            date: forecast.dt_txt,
          };
        });
      }
    });

    // Comprueba si el observable CurrentWeather$ tiene un valor
    this._WeatherUseCase.CurrentWeather$.pipe().subscribe((weatherData) => {
      if (!weatherData) {
        // Si no tiene valor, obtiene los datos del clima actual por defecto
        this.getCurrentWeatherByCoordinates(this.LATITUDE_DEFAULT.toString(), this.LONGITUDE_DEFAULT.toString());
      } else {
        // Si ya tiene valor, utiliza esos datos
        this.currentWeatherData = weatherData;
        console.log(weatherData);
      }
    });
  }

  private getWeatherForecastByCoordinates(lat: string, lon: string): void {
    this._WeatherUseCase.getWeatherForecastByCoordinates(lat, lon).subscribe((data) => {
      this.weatherTime = data.list.slice(0, 5).map((forecast) => {
        console.log(forecast);
        return {
          icon: getWeatherIconUrl(forecast.weather[0].icon),
          Temperature: forecast.main.temp,
          description: forecast.weather[0].description,
          date: forecast.dt_txt,
        };
      });
    });
  }

  private getCurrentWeatherByCoordinates(lat: string, lon: string): void {
    this._WeatherUseCase.getCurrentWeatherByCoordinates(lat, lon).subscribe((data) => {
      this.currentWeatherData = data;
      console.log(data);
    });
  }


}
