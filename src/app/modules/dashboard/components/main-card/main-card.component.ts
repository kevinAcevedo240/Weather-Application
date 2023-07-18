import { Component } from '@angular/core';

@Component({
  selector: '[main-card]',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent {
  currentHour: number;
  currentDate: string;

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
    } else if (this.currentHour >= 19 && this.currentHour < 24) {
      return 'nightfall';
    } else {
      return 'sunset';
    }


  }


}
