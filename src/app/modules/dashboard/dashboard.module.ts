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
import { WeatherUseCase } from 'src/app/Domain/usecases/weather-usecases/weather.usecase';
import { OpenWeatherMapAdapterService } from 'src/app/Infraestructure/driven-adapter/open-weather-map-adapter.service';
import { IWeatherRepository } from 'src/app/Domain/repositories/IWeather.repository';
import { TemperatureConversionPipe } from '../shared/pipes/temperature-conversion.pipe';
import { CustomDatePipe } from '../shared/pipes/custom-date.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    WeatherComponent,
    MainCardComponent,
    WeatherByHourCardComponent,
    NavComponent,
    OtherInformationCardComponent,
    WorldCountriesMapCardComponent,
    TemperatureConversionPipe,
    CustomDatePipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    FontAwesomeModule,
  ],
  providers: [
    { provide: WeatherUseCase, useClass: WeatherUseCase },
    { provide: IWeatherRepository, useClass: OpenWeatherMapAdapterService }
  ],

})
export class DashboardModule {}
