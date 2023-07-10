import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { WeatherSingleCardComponent } from './components/weather-single-card/weather-single-card.component';
import { WeatherDualCardComponent } from './components/weather-dual-card/weather-dual-card.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { WeatherByHourCardComponent } from './components/weather-by-hour-card/weather-by-hour-card.component';
import { NavComponent } from './nav/nav.component';
import { OtherInformationCardComponent } from './components/other-information-card/other-information-card.component';
import { WorldCountriesMapCardComponent } from './components/world-countries-map-card/world-countries-map-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    WeatherSingleCardComponent,
    WeatherDualCardComponent,
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
  ],
})
export class DashboardModule {}
