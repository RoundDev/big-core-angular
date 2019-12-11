import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringNoLonger'
})
export class StringNoLongerPipe implements PipeTransform {

  transform(value: any, length:number, ending:string): string {
    if (length == null) {
      length = 100;
    }
    if (ending==null){ending = "..."}
    if (value.length > length) {
      return value.substring(0, length - ending.length) + ending;
    } else {
      return value;
    }
  }

}
