import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metersToKilometers'
})
export class MetersToKilometersPipe implements PipeTransform {

  transform(meters: number | undefined): string {
    if (!meters || isNaN(meters)) {
      return '';
    }

    const kilometers = (meters / 1000);
    const formattedKilometers = kilometers % 1 === 0 ? kilometers.toFixed(0) : kilometers.toFixed(1);
    return `${formattedKilometers} km`;
  }
}
