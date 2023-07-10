import { Component, Injectable } from '@angular/core';
import { IThemeRepository } from 'src/app/Domain/repositories/ITheme.repository';
import { ThemeService } from 'src/app/Domain/services/theme.service';

@Component({
  selector: '[nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

@Injectable({ providedIn: 'root' })
export class NavComponent {
  searchText: string = '';
  // constructor(private ithemeRepository: IThemeRepository) {}

  // public toggleTheme(): void {
  //   const currentTheme = this.ithemeRepository.getTheme();
  //   const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  //   this.ithemeRepository.setTheme(newTheme);
  // }

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }

  searchPlace(): void {
    if (this.searchText.trim() === '') {
      // Mostrar la alerta si el input está vacío
      console.log('Ingrese un lugar para realizar la búsqueda');
    } else {
      // Realizar la acción correspondiente con el texto ingresado
      console.log('Buscar:', this.searchText);
    }
  }
}
