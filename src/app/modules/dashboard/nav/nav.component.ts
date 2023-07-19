import { Component, Injectable, inject } from '@angular/core';
import { IThemeRepository } from 'src/app/Domain/repositories/ITheme.repository';
import { ThemeService } from 'src/app/Domain/services/theme.service';
import { faEarth, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { IWeatherRepository } from 'src/app/Domain/repositories/IWeather.repository';
import { WeatherUseCase } from 'src/app/Domain/usecases/weather-usecases/weather.usecase';
import { ThemeUsecase } from 'src/app/Domain/usecases/theme-usecases/theme.usecase';

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
      console.log('Buscar:', this.searchText);
    }

    this.showResults = true;
  }

    getCurrentLocation(): void {
      this._WeatherUseCase.getCurrentLocation().pipe(
      ).subscribe(
        (location) => {
          console.log('Ubicación actual:', location);
          // Realiza la acción correspondiente con las coordenadas de ubicación (location.lat, location.lon)
        },
        (error) => {
          console.log('Error al obtener la ubicación:', error);
          // Maneja el error de obtener la ubicación actual
        }
      );
    }



}
