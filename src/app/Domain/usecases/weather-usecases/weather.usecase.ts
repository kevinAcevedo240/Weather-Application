import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherRepository } from '../../repositories/IWeather.repository';
import { WeatherData } from '../../entities/WeatherData';
import { ForecastData } from '../../entities/ForecastData';

@Injectable({
  providedIn: 'root'
})
export class WeatherUseCase {
  constructor(private _weatherRepository: IWeatherRepository) {}

  getCurrentWeatherByLocation(location: string): Observable<WeatherData> {
    return this._weatherRepository.getCurrentWeatherByLocation(location);
  }

  getCurrentWeatherByCoordinates(lat: string, lon: string): Observable<WeatherData> {
    return this._weatherRepository.getCurrentWeatherByCoordinates(lat, lon);
  }

  getWeatherForecastByCoordinates(lat: string, lon: string): Observable<ForecastData> {
    return this._weatherRepository.getWeatherForecastByCoordinates(lat, lon);
  }

  getCurrentLocation(): Observable<{ lat: string; lon: string }> {
    return new Observable((observer) => {
      if (!navigator.geolocation) {
        observer.error('Geolocation is not supported by your browser');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toString();
          const lon = position.coords.longitude.toString();
          observer.next({ lat, lon });
          observer.complete();
        },
        (error) => {
          observer.error('Unable to retrieve your location');
        }
      );
    });
  }

  getCurrentWeatherByCurrentLocation(): Observable<WeatherData> {
    return new Observable((observer) => {
      this.getCurrentLocation().subscribe(
        (location) => {
          this._weatherRepository
            .getCurrentWeatherByCoordinates(location.lat, location.lon)
            .subscribe(
              (weatherData) => {
                observer.next(weatherData);
                observer.complete();
              },
              (error) => {
                observer.error('Unable to get current weather');
              }
            );
        },
        (error) => {
          observer.error('Unable to retrieve your location');
        }
      );
    });
  }
}
