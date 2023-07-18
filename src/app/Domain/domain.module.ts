import { NgModule } from '@angular/core';
import { ThemeUsecase } from './usecases/theme-usecases/theme.usecase';
import { WeatherUseCase } from './usecases/weather-usecases/weather.usecase';

@NgModule({
  providers: [
    ThemeUsecase
  ]
})
export class DomainModule {


 }
