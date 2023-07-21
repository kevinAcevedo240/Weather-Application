import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureConversionPipe } from './pipes/temperature-conversion.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { TimestampToTimePipe } from './pipes/timestamp-to-time.pipe';
import { MetersToKilometersPipe } from './pipes/meters-to-kilometers.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GoTopButtonComponent } from './components/go-top-button/go-top-button.component';

@NgModule({
  declarations: [
    TemperatureConversionPipe,
    CustomDatePipe,
    CamelCasePipe,
    TimestampToTimePipe,
    MetersToKilometersPipe,
    LoaderComponent,
    NotFoundComponent,
    GoTopButtonComponent
  ],
  imports: [CommonModule],
  exports: [
    NotFoundComponent,
    TemperatureConversionPipe,
    CustomDatePipe,
    CamelCasePipe,
    TimestampToTimePipe,
    MetersToKilometersPipe,
    LoaderComponent,
    NotFoundComponent,
    GoTopButtonComponent
  ],
})
export class SharedModule {}
