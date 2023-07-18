import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastData } from 'src/app/Domain/entities/ForecastData';
import { WeatherData } from 'src/app/Domain/entities/WeatherData';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapAdapterService {

  private APIKEY = '20fdfb76008f0d97399a7057b61972e9';
  private BASE_URL = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getCurrentWeatherByCoordinates(lat: string, lon: string): Observable<WeatherData> {
    const url = `${this.BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${this.APIKEY}`;
    return this.http.get<WeatherData>(url);
  }

  getCurrentWeatherByLocation(location: string): Observable<WeatherData> {
    const url = `${this.BASE_URL}/weather?q=${location}&appid=${this.APIKEY}`;
    return this.http.get<WeatherData>(url);
  }

  getWeatherForecastByCoordinates(lat: string, lon: string): Observable<ForecastData> {
    const url = `${this.BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${this.APIKEY}`;
    return this.http.get<ForecastData>(url);
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
          this.getCurrentWeatherByCoordinates(location.lat, location.lon).subscribe(
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
