import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";

@Component({
  selector: 'app-account-ensure-login',
  templateUrl: './account-ensure-login.component.html',
  styleUrls: ['./account-ensure-login.component.scss']
})
export class AccountEnsureLoginComponent implements OnInit {

  returnUrl: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bigovenAuthService: BigOvenAuthService
  ) {
  }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        this.returnUrl = params['ReturnUrl'];


        if (this.bigovenAuthService.isLoggedIn()) {
          let email = "";
          let firstName = "";
          let lastName = "";

          let fullUrl = this.returnUrl + "/" + this.bigovenAuthService.userIdFromJWT() + "?email=" + email + "&firstName=" + firstName + "&lastName=" + lastName;
          window.location.href = fullUrl;

        } else {
          this.router.navigateByUrl("/account/login?ReturnUrl=" + this.returnUrl);
        }

      });

  }

}
