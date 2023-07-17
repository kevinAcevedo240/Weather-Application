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
    console.log(this.currentHour);
    if (this.currentHour >= 8 && this.currentHour < 17) {
      return 'morning';
    } else if (this.currentHour >= 17 && this.currentHour < 19) {
      return 'sunrise';
    } else if (this.currentHour >= 19 && this.currentHour < 21) {
      return 'mid-nightfall';
    } else if (this.currentHour >= 21 && this.currentHour < 24) {
      return 'nightfall';
    } else {
      return 'sunset';
    }


  }
}
