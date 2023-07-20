import { Component, Injectable, inject } from '@angular/core';
import { IThemeRepository } from 'src/app/Domain/repositories/ITheme.repository';
import { ThemeService } from 'src/app/Domain/services/theme.service';
import { faEarth, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { IWeatherRepository } from 'src/app/Domain/repositories/IWeather.repository';
import { WeatherUseCase } from 'src/app/Domain/usecases/weather-usecases/weather.usecase';
import { ThemeUsecase } from 'src/app/Domain/usecases/theme-usecases/theme.usecase';
import { WeatherByTime } from '../models/weatherByTime';
import { WeatherData } from 'src/app/Domain/entities/WeatherData';
import { getWeatherIconUrl } from '../../shared/Util/utils';
import { ForecastData } from 'src/app/Domain/entities/ForecastData';

@Component({
  selector: '[nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

@Injectable({ providedIn: 'root' })
export class NavComponent {
  faEarth = faEarth;
  faMagnifyingGlass = faMagnifyingGlass;
  showResults: boolean = false;
  selectedOption: string = '';
  public weatherTime: WeatherByTime[] = [];
  public currentWeatherData: WeatherData | null = null;

   public themeService = inject(ThemeService);

  searchText: string = '';
  constructor(public _WeatherUseCase : WeatherUseCase,
    public _ThemeUseCase: ThemeUsecase){}

  toggleTheme() {
    // const currentTheme = this._ThemeUseCase.getTheme();
    // console.log('current Theme: ',currentTheme);
    // const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // console.log('New Theme: ',newTheme);
    // this._ThemeUseCase.setTheme(newTheme);
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }

  searchPlace(): void {
    if (this.searchText.trim() === '') {
      // Mostrar la alerta si el input está vacío
      console.log('Ingrese un lugar para realizar la búsqueda');
    } else {
      this._WeatherUseCase.getCurrentWeatherByLocation(this.searchText.trim()).subscribe(
        (weatherData) => {
          this._WeatherUseCase.getCurrentWeatherByCoordinates(
            weatherData.coord.lat.toString(),
            weatherData.coord.lon.toString()
          ).subscribe(
            (currentWeatherData) => {
              this._WeatherUseCase.CurrentWeather.next(currentWeatherData);
              console.log(currentWeatherData);
            },
            (error) => {
              console.error('Error al obtener el clima actual:', error);
            }
          );

          this._WeatherUseCase.getWeatherForecastByCoordinates(
            weatherData.coord.lat.toString(),
            weatherData.coord.lon.toString()
          ).subscribe(
            (forecastData) => {
              const forecastDataFormatted: ForecastData = {
                list: forecastData.list.slice(0, 5)
              };
              this._WeatherUseCase.CurrentForecast.next(forecastDataFormatted);
              console.log(forecastDataFormatted);
            },
            (error) => {
              console.error('Error al obtener el pronóstico:', error);
            }
          );
        },
        (error) => {
          console.error('Error al obtener el clima por ubicación:', error);
        }
      );
    }
  }

    getCurrentLocation(): void {
      this._WeatherUseCase.getCurrentLocation().pipe(
      ).subscribe(
        (location) => {
          console.log('Ubicación actual:', location);
          this._WeatherUseCase.getWeatherForecastByCoordinates(location.lat.toString(), location.lon.toString())
      .subscribe((data) => {
        const forecastData: ForecastData = {
          list: data.list.slice(0, 5)
        };
        this._WeatherUseCase.CurrentForecast.next(forecastData);
        console.log(forecastData);

      });

      this._WeatherUseCase
      .getCurrentWeatherByCoordinates(
        location.lat.toString(),
        location.lon.toString()
      )
      .subscribe((data) => {
        this._WeatherUseCase.CurrentWeather.next(data);
        console.log(data);
      });

        },
        (error) => {
          console.log('Error al obtener la ubicación:', error);
        }
      );
    }



}
