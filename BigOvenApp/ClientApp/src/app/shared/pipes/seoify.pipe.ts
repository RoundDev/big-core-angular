import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seoify'
})
export class SeoifyPipe implements PipeTransform {

  transform(value: string): string {
    let path = value.toLowerCase();
    path = path.replace(/ /g, '-').replace(/&/g,'');
    return path;
  }

}
