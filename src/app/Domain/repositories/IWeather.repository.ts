import { Observable } from 'rxjs';
import { ForecastData } from '../entities/ForecastData';
import { WeatherData } from '../entities/WeatherData';

export abstract class IWeatherRepository {
  abstract getCurrentWeatherByCoordinates(lat: string, lon: string): Observable<WeatherData>;
  abstract getCurrentWeatherByLocation(location: string): Observable<WeatherData>;
  abstract getWeatherForecastByCoordinates(lat: string, lon: string): Observable<ForecastData>;
  abstract getCurrentLocation(): Observable<{ lat: string; lon: string }>;
  abstract getCurrentWeatherByCurrentLocation(): Observable<WeatherData>;
}
