import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { BigOvenAuthService } from './bigovenauth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private authService : BigOvenAuthService,
    private router : Router,
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {
    this.authService.getOnBigOvenUserLoginStateChangeEventEmitter().subscribe(data=>{

    });
  }

  canActivate( route : ActivatedRouteSnapshot,
               state : RouterStateSnapshot

  ) {

    this.cookieService.set("ReturnUrl",route.url.join(''));

    if(this.authService.isLoggedIn()) return true;


    // else navigate to login
    this.router.navigateByUrl("/account/login?ReturnUrl="+route.url.join('/'));
    return false;
  }
}
