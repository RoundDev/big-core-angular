import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlpath'
})
export class UrlpathPipe implements PipeTransform {

  transform(value: string): string {
    let path = value.replace("https://www.bigoven.com","").replace("http://www.bigoven.com","");
    return path;
  }

}
