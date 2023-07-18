import { Component, Injectable, inject } from '@angular/core';
import { IThemeRepository } from 'src/app/Domain/repositories/ITheme.repository';
import { ThemeService } from 'src/app/Domain/services/theme.service';
import { faEarth, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { IWeatherRepository } from 'src/app/Domain/repositories/IWeather.repository';
import { WeatherUseCase } from 'src/app/Domain/usecases/weather-usecases/weather.usecase';

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
  constructor(public _WeatherUserCase : WeatherUseCase){}
  // constructor(private ithemeRepository: IThemeRepository) {}

  // public toggleTheme(): void {
  //   const currentTheme = this.ithemeRepository.getTheme();
  //   const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  //   this.ithemeRepository.setTheme(newTheme);
  // }


  // constructor(public themeService: ThemeService) {}

  toggleTheme() {
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
      this._WeatherUserCase.getCurrentLocation().pipe(
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

  //  getCurrentLocation(): void {
  //   if (!navigator.geolocation) {
  //     console.log('Geolocation is not supported by your browser');
  //     return;
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const lat = position.coords.latitude.toString();
  //       const lon = position.coords.longitude.toString();
  //       console.log('Ubicación actual:', { lat, lon });
  //       // Realiza la acción correspondiente con las coordenadas de ubicación (lat, lon)
  //     },
  //     (error) => {
  //       console.log('Error al obtener la ubicación:', error);
  //       // Maneja el error de obtener la ubicación actual
  //     }
  //   );
  // }


}
