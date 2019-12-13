import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tofraction'
})
export class TofractionPipe implements PipeTransform {

  transform(value: number): string {
    let Fraction = require('fractional').Fraction;
    return (new Fraction(value)).toString();
  }

}
