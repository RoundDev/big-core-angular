import { Injectable, EventEmitter, Component } from '@angular/core';
import { API2ModelsBigOvenUser } from '../../../../output/models';
import { CookieService } from 'ngx-cookie-service';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ApiClientService } from '../../../../output/api2';

import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

export class JWTInfo {
  userId: number = -1;
  username: string = null;
  photoUrl: string = null;
}

@Injectable({
  providedIn: 'root'
})
export class BigOvenAuthService {

  private loggedIn: boolean = false;
  private _jwt: string;
  private user: API2ModelsBigOvenUser = null;
  private onBigOvenUserLoginStateChange: EventEmitter<JWTInfo> = new EventEmitter<JWTInfo>();
  private meLoading: boolean;

  bsModalRef: BsModalRef;

  private _returnUrl: string;

  private usersImFollowing: number[] = null;
  private usersFollowingMe: number[] = null;
  private queryInProgressUsersImFollowing = false;
  private onUsersImFollowingLoadedEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor( private cookieService: CookieService,
               private route: ActivatedRoute,
               private apiService: ApiClientService,
               private router: Router,
               private modalService: BsModalService)
  {
    this._returnUrl = this.cookieService.get("ReturnUrl");

    this.route.queryParams
      .subscribe(params => {
        this._returnUrl = params['ReturnUrl'];
      });
  }

  public sendToRedirectUrl()
  {
    if (this.userIdFromJWT()>0)
    {
      if (this._returnUrl!=null)
      {
        this.router.navigateByUrl(this._returnUrl);
      }
      else
      {
        this.router.navigateByUrl("/");
      }
    } else
    {
      this.cookieService.delete("sess");
      this._jwt = null;

      this.nudgeIfNotAuthenticated(this._returnUrl);
    }
  }

  public nudgeIfNotAuthenticated(_returnUrl:string)
  {
    if (!this.isLoggedIn())
    {
      this.bsModalRef = this.modalService.show(ModalContentComponent);
      this.bsModalRef.content.title = 'Please Sign In';
      this.bsModalRef.content.returnUrl = _returnUrl;
    }
  }

  public getonUsersImFollowingLoadedEventEmitter()
  {
    return this.onUsersImFollowingLoadedEventEmitter;
  }
  public getUsersImFollowing() {
    return this.usersImFollowing;
  }
  public getUsersFollowingMe() {
    return this.usersFollowingMe;
  }
  public AmIFollowingUser(userId: number) {
    if (this.usersImFollowing === null) {
      if (!this.queryInProgressUsersImFollowing)
      {
        this.queryInProgressUsersImFollowing = true;
        this.apiService.User_Follows(this.userIdFromJWT(), 1, 200).subscribe(
          data => {
            this.usersImFollowing = data.body.map(x => x.UserID);
            this.queryInProgressUsersImFollowing = false;
            var found = this.usersImFollowing.find(x => x == userId) >= 0;
            this.onUsersImFollowingLoadedEventEmitter.emit("updated");
            return found;
          }
        )}

    } else {
      var found = this.usersImFollowing.find(x => x == userId) >= 0;
      return found;
    }
  }
  public AddFollowToLocalCache(userId: number) {
    if (!this.AmIFollowingUser(userId)) {
      this.usersImFollowing.push(userId);
      this.onUsersImFollowingLoadedEventEmitter.emit("updated");
    }
  }
  public RemoveFollowFromLocalCache(userId: number) {
    if (this.AmIFollowingUser(userId)) {
      var index = this.usersImFollowing.indexOf(userId, 0);
      if (index > -1) {
        this.usersImFollowing.splice(index, 1);
        this.onUsersImFollowingLoadedEventEmitter.emit("updated");
      }

    }
  }


  public getJWT() {
    return this._jwt;
  }

  public userIdFromJWT(): number {
    if (this._jwt == null) return -1;
    try {
      let jwtHelper: JwtHelper = new JwtHelper();
      let uId = jwtHelper.decodeToken(this._jwt).userId;
      return uId;
    } catch (e) {
      this.cookieService.delete("sess");
      this._jwt = null;
      return -1;
    }
  }

  public isPro(): boolean {
    if (this._jwt == null) return false;
    try {
      let jwtHelper: JwtHelper = new JwtHelper();
      let userlevel = jwtHelper.decodeToken(this._jwt).userlevel;
      return userlevel == "pro";
    } catch (e) {
      return false;
    }
  }

  public userlevelFromJWT(): string {
    if (this._jwt == null) return "unknown";
    try {
      let jwtHelper: JwtHelper = new JwtHelper();
      let uId = jwtHelper.decodeToken(this._jwt).userlevel;
      return uId;
    } catch (e) {
      return "unknown";
    }
  }

  public usertypeFromJWT(): number {
    if (this._jwt == null) return -1;
    try {
      let jwtHelper: JwtHelper = new JwtHelper();
      let uId = jwtHelper.decodeToken(this._jwt).usertype;
      return uId;
    } catch (e) {
      return 0;
    }
  }
  public isAdmin(): boolean {
    return this.usertypeFromJWT() >= 6;
  }

  public userNameFromJWT(): string {
    if (this._jwt == null) return null;

    try {
      let jwtHelper: JwtHelper = new JwtHelper();
      let uN = jwtHelper.decodeToken(this._jwt).username;
      return uN;
    } catch (e) { return null; }
  }

  public photoUrlFromJWT(): string {
    if (this._jwt == null) return null;
    try {
      let jwtHelper: JwtHelper = new JwtHelper();
      let p = jwtHelper.decodeToken(this._jwt).photoUrl;
      return p;
    } catch (e) { return null; }
  }

  public attemptLoginViaCookie()
  {
    if ((this.cookieService.get("sess")||"")!="")
    {
      let possibleJWT = this.cookieService.get("sess");
      let jwtHelper: JwtHelper = new JwtHelper();
      try {
        if (jwtHelper.decodeToken(possibleJWT))
        {
          this._jwt = possibleJWT;
          this.loggedIn = true;
          let jwtInfo:JWTInfo = new JWTInfo();
          jwtInfo.photoUrl = this.photoUrlFromJWT();
          jwtInfo.userId = this.userIdFromJWT();
          jwtInfo.username = this.userNameFromJWT();
          this.onBigOvenUserLoginStateChange.emit(jwtInfo);
          this.getMeJWT();
        }}
      catch(e)
      {
        this.cookieService.delete("sess");
      }

    }

  }


  public isLoggedIn() {
      // let possibleJWT = this.cookieService.get("sess");
      // let jwtHelper: JwtHelper = new JwtHelper();
      // if (jwtHelper.decodeToken(possibleJWT)) {
      //   this.loggedIn = true;
      //   return this.loggedIn;
      // }
    return this.loggedIn;
    }


  public logOut() {
    this._jwt = null;
    this.cookieService.delete("sess");
    this.loggedIn = false;
    this.user = null;
    this.usersFollowingMe = [];
    this.usersImFollowing = [];
    this.onBigOvenUserLoginStateChange.emit(null);
  }

  public checkOrSetJWT(username: string, password: string): boolean {
    // is it in cookie?
    this._jwt = this.cookieService.get("sess");

    // still valid? use it.
    let jwtHelper: JwtHelper = new JwtHelper();

    if (tokenNotExpired(this._jwt)) {
      this.loggedIn = true;
      return true;
    } else {
      // not there or invalid? get again

      let headers = new HttpHeaders();
      let authS = btoa(username + ":" + password);
      const fullHeaders = new HttpHeaders().set("Authorization", "Basic " + authS).set('Accept', 'application/json').set("X-BigOven-API-Key", "glFUKikehWjLW900etpS564VgIzOWSW5");

      try {
        this._GetJWT(username, password, fullHeaders).subscribe(data => {
          let jwHelper: JwtHelper = new JwtHelper();
          try {
            if (data.body.JWT === null) {
              alert("Invalid credentials.");
              return false;
            }

            jwHelper.decodeToken(data.body.JWT);
            this._jwt = data.body.JWT;
            this.cookieService.delete("sess");
            this.cookieService.set("sess", this._jwt);
            this.loggedIn = true;
            let jwtInfo = new JWTInfo();
            jwtInfo.userId = this.userIdFromJWT();
            jwtInfo.username = this.userNameFromJWT();
            jwtInfo.photoUrl = this.photoUrlFromJWT();
            this.onBigOvenUserLoginStateChange.emit(jwtInfo);

            return true;

          } catch (e) {
            alert("Login not valid");
            this._jwt = null;
            this.cookieService.delete("sess");
            return false;
          }

        });
      } catch (e) {
        alert("exception " + e);
        return false;
      }
    }
  }

  public RefreshJWT() {
    this._RefreshJWT().subscribe(data => {
      this._jwt = data.body.JWT;
      this.cookieService.delete("sess");
      this.cookieService.set("sess", this._jwt);
      this.loggedIn = true;
      let jwtInfo = new JWTInfo();
      jwtInfo.userId = this.userIdFromJWT();
      jwtInfo.username = this.userNameFromJWT();
      jwtInfo.photoUrl = this.photoUrlFromJWT();
      this.onBigOvenUserLoginStateChange.emit(jwtInfo);

      return;
    });
  }

  public getJWTFromFacebook(token: string) {
    let uri = "/utils/user/jwt/byfacebooktoken/" + token;
    let params = new HttpParams();
    this.apiService.sendRequest<JWTResponse>('get', uri, new HttpHeaders(), params, null).subscribe(data => {
      this._jwt = data.body.JWT;
      this.cookieService.delete("sess");
      this.cookieService.set("sess", this._jwt);
      let redirectUrl = this.cookieService.get("RedirectUrl");
      this.loggedIn = true;

      let jwtInfo = new JWTInfo();
      jwtInfo.userId = this.userIdFromJWT();
      jwtInfo.username = this.userNameFromJWT();
      jwtInfo.photoUrl = this.photoUrlFromJWT();
      this.onBigOvenUserLoginStateChange.emit(jwtInfo);

      if (this._returnUrl == null) { this._returnUrl = "/"; }
      this.router.navigateByUrl(this._returnUrl);
      return;
    });
  }

  public getJWTFromGoogle(token: string) {
    let uri = "/utils/user/jwt/bygoogletoken?id_token=" + token;
    let params = new HttpParams();
    this.apiService.sendRequest<JWTResponse>('get', uri, new HttpHeaders(), params, null).subscribe(data => {
      this._jwt = data.body.JWT;
      this.cookieService.delete("sess");
      this.cookieService.set("sess", this._jwt);

      this.loggedIn = true;

      let jwtInfo = new JWTInfo();
      jwtInfo.userId = this.userIdFromJWT();
      jwtInfo.username = this.userNameFromJWT();
      jwtInfo.photoUrl = this.photoUrlFromJWT();
      this.onBigOvenUserLoginStateChange.emit(jwtInfo);
      if (this._returnUrl == null) { this._returnUrl = "/"; }
      this.router.navigateByUrl(this._returnUrl);
      return;
    });
  }

  public _RefreshJWT(): Observable<HttpResponse<JWTResponse>> {
    let uri = "/utils/user/jwt/refresh";
    let params = new HttpParams();
    return this.apiService.sendRequest<JWTResponse>('get', uri, new HttpHeaders(), params, null);
  }

  private _GetJWT(username: string, password: string, headers: HttpHeaders): Observable<HttpResponse<JWTResponse>> {
    let uri = "/utils/user/jwt?email=" + username + "&password=" + password;
    let params = new HttpParams();
    return this.apiService.sendRequest<JWTResponse>('get', uri, headers, params, null);
  }

  public getMeJWT() {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Bearer " + this._jwt);

    if (!this.meLoading) {
      this.meLoading = true;

      this._GetMe(headers).subscribe(
        data => {
          if (data.ok) {
            this.meLoading = false;
            this.user = data.body;
            this.loggedIn = true;
            // this.router.navigateByUrl("./");
          } else {
            this.meLoading = false;
            if (data.status === 401 || data.status === 403) {
              alert("Unauthorized.");
            }
          }
        },
        err => {
          this.meLoading;
        });

    }
  }

  private _GetMe(headers: HttpHeaders): Observable<HttpResponse<API2ModelsBigOvenUser>> {
    let uri = `/me`;
    let params = new HttpParams();
    return this.apiService.sendRequest<API2ModelsBigOvenUser>('get', uri, headers, params, null);
  }

  public getUser() {
    return this.user;
  }

  public getUserNameOrBlank() {
    if (this.user == null) { return ""; }
    try {
      return this.user.Profile.UserName;
    } catch (e) {
      return "";
    }
  }

  public getOnBigOvenUserLoginStateChangeEventEmitter() {
    return this.onBigOvenUserLoginStateChange;
  }

}

export interface JWTResponse {
  JWT: string;
}

@Component({
  selector: 'modal-content',
  template: `
      <div class="modal-header">
        <h4 class="modal-title pull-left">{{title}}</h4>
        <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Please <a class="btn btn-default" (click)="closeAndSignIn()">sign in</a> or <a class="btn btn-default" (click)="closeAndSignIn()">join us</a> free!</p>
      </div>
      `
})
export class ModalContentComponent {
  title: string;
  returnUrl: string;
  constructor(
    public bsModalRef: BsModalRef,
    public router: Router) {}

  public closeAndSignIn()
  {
    this.bsModalRef.hide();
    this.router.navigateByUrl("/account/login?ReturnUrl="+this.returnUrl);
  }
  public closeAndJoin()
  {
    this.bsModalRef.hide();
    this.router.navigateByUrl("/account/join?ReturnUrl="+this.returnUrl);
  }
}
