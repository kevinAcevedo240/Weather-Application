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
    hours = hours ? hours : 12;
    const minutes = timeParts[1];

    return `${hours}:${minutes} ${ampm}`;
  }

}
