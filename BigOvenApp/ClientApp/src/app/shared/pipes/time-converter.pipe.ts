import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConverter'
})
export class TimeConverterPipe implements PipeTransform {

  transform(value: number) {
    if(value > 0 && value / 60 < 1) {
      return value + ' min.';
    } else {
      let timeInSeconds = Math.floor(value * 60);
      let hours = Math.floor( timeInSeconds / 3600);
      timeInSeconds = timeInSeconds - (hours * 3600);
      let minutes = Math.floor(timeInSeconds / 60);
      return hours.toString() +  'h' + ' ' + minutes.toString() + ' min.';
    }
  }

}
