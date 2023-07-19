import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(dateStr: string): string {
    const dateParts = dateStr.split(' ');
    const timeParts = dateParts[1].split(':');
    let hours = parseInt(timeParts[0], 10);
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours || 12; // Usar 12 en lugar de 0 si el valor es 0
    const minutes = timeParts[1];

    return `${hours} ${ampm}`;
  }

}
