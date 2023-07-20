import { Component, Input  } from '@angular/core';
import { WeatherData } from 'src/app/Domain/entities/WeatherData';
import { getWeatherIconUrl } from 'src/app/modules/shared/Util/utils';

@Component({
  selector: '[main-card]',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent {

  @Input('currentWeather') currentWeatherData: WeatherData | null = null;

  currentHour: number;
  currentDate: string;
  currentTemperature: number = 298.79;

  constructor() {
    this.currentHour = new Date().getHours();
    this.currentDate = this.formatDate(new Date());
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };

    return date.toLocaleDateString('en-US', options);
  }

  getCardClass(): string {
    if (this.currentHour >= 8 && this.currentHour < 17) {
      return 'morning';
    } else if (this.currentHour >= 17 && this.currentHour < 18) {
      return 'sunrise';
    } else if (this.currentHour >= 18 && this.currentHour < 19) {
      return 'mid-nightfall';
    } else if (this.currentHour >= 19 && this.currentHour < 24 ||this.currentHour >= 0 && this.currentHour < 5) {
      return 'nightfall';
    } else if (this.currentHour >= 5 && this.currentHour < 6) {
      return 'end-nightfall';
    } else {
      return 'sunset';
    }


  }


}
