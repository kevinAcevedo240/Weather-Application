import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToTime'
})
export class TimestampToTimePipe implements PipeTransform {

  transform(timestamp: number | undefined): string {
    if (!timestamp || isNaN(timestamp)) {
      return '';
    }

    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Si es 0, lo cambiamos a 12 para el formato de 12 horas.
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    return formattedTime;
  }

}
