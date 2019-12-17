import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stepsFormat'
})
export class StepsFormatPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\n/g, '<br/>');
  }

}
