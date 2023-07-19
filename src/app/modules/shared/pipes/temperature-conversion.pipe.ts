import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConversion'
})
export class TemperatureConversionPipe implements PipeTransform {

  transform(temperature: number): string {
    const celsius = (temperature - 273.15).toFixed(1);
    const temperatureParts = celsius.split('.');
    const integerPart = temperatureParts[0];
    const decimalPart = temperatureParts[1];

    return `${decimalPart === '0' ? integerPart : celsius}°C`;
  }

}
