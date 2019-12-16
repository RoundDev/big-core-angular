import { Component, OnInit } from '@angular/core';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser} from "angular4-social-login";
import {UserService} from "../../../shared/services/user.service";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss']
})
export class AccountLoginComponent implements OnInit {

  showNav = false;
  user: SocialUser;
  username: string = "";
  password: string = "";
  buttonText: string = "Sign In";
  private chosenProvider: string = null;
  private sub: any = null;
  private sub2: any = null;

  message: string = null;

  constructor(
    private socialAuthService: AuthService,
    private bigOvenAuthService: BigOvenAuthService,
    private router: Router,
    private userService: UserService
  ) {
    if (this.sub === null) {
      this.sub = this.bigOvenAuthService.getOnBigOvenUserLoginStateChangeEventEmitter().subscribe(data => {
        if (this.bigOvenAuthService.userIdFromJWT()>0) {
          this.bigOvenAuthService.sendToRedirectUrl();
        }
      });
    }

    this.bigOvenAuthService.attemptLoginViaCookie();
  }

  ngOnInit() {

    if (this.sub2 == null) {

      this.sub2 = this.socialAuthService.authState.subscribe((usr) => {
        if (usr == null) { return; }
        if (usr.provider != this.chosenProvider) { return; }
        this.user = usr;
        // now exchange at server for JWT

        if (usr != null) {
          switch (usr.provider) {
            case "FACEBOOK":
              if (usr["authToken"] != null) {
                if (usr["authToken"]["accessToken"] != null) {
                  let accessToken = usr["authToken"]["accessToken"];
                  // now exchange it with server
                  // this.bigOvenAuthService.getJWTFromFacebook(accessToken)
                  this.bigOvenAuthService.getJWTFromFacebook(accessToken);
                  return;
                }
              }
              else // user[authToken] is null
              {
                this.message = "authToken is null from Facebook, Please refresh this page, and try again.";
                this.buttonText = "Sign in";
                this.user = null;
              }
              break;

            case "GOOGLE":
              if (usr["authToken"] != null) {
                // now exchange it with server
                let accessToken = usr["authToken"].toString();
                this.bigOvenAuthService.getJWTFromGoogle(accessToken);
                return;
              }
              else // user[authToken] is null
              {
                this.message = "authToken is null from Facebook, Please refresh this page, and try again.";
                this.buttonText = "Sign in";
                this.user = null;
              }
              break;

            default: break;
          }
        }
        else // user is null
        {
          this.message = "Error from third-party login. Please try again.";
          this.buttonText = "Sign in";
        }
      });
    }

  }

  signInWithGoogle(): void {
    this.chosenProvider = "GOOGLE";
    this.buttonText = "Signing in...";
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.chosenProvider = "FACEBOOK";
    this.buttonText = "Signing in...";
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithUserNamePassword() {
    this.buttonText = "Signing in...";
    // first get jwt
    var success = this.bigOvenAuthService.checkOrSetJWT(this.username, this.password);
    if (!success) {
      this.buttonText = "Sign In";
      return;
    }
    if (this.bigOvenAuthService.getJWT() != null) {
      this.bigOvenAuthService.getMeJWT();
    } else {
      this.buttonText = "Sign In";
    }

  }

  signOut(): void {
    this.bigOvenAuthService.logOut();
    this.socialAuthService.signOut();
    this.buttonText = "Sign In";
  }

}
