import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { map, filter, tap } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private route: ActivatedRoute)
  {}

  intercept(req: HttpRequest<any>,
            next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {}, err => {
        if (err instanceof HttpErrorResponse && err.status == 401) {
          // handle 401 errors
          console.log("401!!!!!!");
          this.router.navigateByUrl("/account/login?ReturnUrl="+this.route.snapshot.url.join("/"));
        }

      })
    );
  }
}
