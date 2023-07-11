import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { WeatherByHourCardComponent } from './components/weather-by-hour-card/weather-by-hour-card.component';
import { NavComponent } from './nav/nav.component';
import { OtherInformationCardComponent } from './components/other-information-card/other-information-card.component';
import { WorldCountriesMapCardComponent } from './components/world-countries-map-card/world-countries-map-card.component';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    DashboardComponent,
    WeatherComponent,
    MainCardComponent,
    WeatherByHourCardComponent,
    NavComponent,
    OtherInformationCardComponent,
    WorldCountriesMapCardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    FontAwesomeModule,
  ],
})
export class DashboardModule {}
