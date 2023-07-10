import { Component } from '@angular/core';
import { ThemeService } from './Domain/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather App';

  constructor(public themeService: ThemeService) {}
}
