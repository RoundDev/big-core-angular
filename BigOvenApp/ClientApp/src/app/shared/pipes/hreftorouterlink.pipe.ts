import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
  name: 'hreftorouterlink'
})
export class HreftorouterlinkPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ){}

  transform(value: string): SafeHtml {
    //let result = value.replace(/href=/ig, "<span data-link=\"$1\"></span>");
    //result = result.replace(/href=/g,"");
    let result = value;
//        console.log(result);
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

}
