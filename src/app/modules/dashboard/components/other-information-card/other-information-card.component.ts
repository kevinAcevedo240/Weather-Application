import { Component, Input } from '@angular/core';
import { faWind, faUmbrella, faTint, faEye, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/Domain/entities/WeatherData';


@Component({
  selector: '[other-information-card]',
  templateUrl: './other-information-card.component.html',
  styleUrls: ['./other-information-card.component.scss']
})
export class OtherInformationCardComponent {
  @Input('currentHighlights') currentWeatherData: WeatherData | null = null;


  faWind = faWind;
  faUmbrella = faUmbrella;
  faTint = faTint;
  faEye = faEye;
  faSun = faSun;
  faMoon = faMoon;

  isHovered1 = false;
  isHovered2 = false;
  isHovered3 = false;


  getRotationStyle(deg: number | undefined): string {
    return `rotate(${deg ?? 0}deg)`;
  }
}
