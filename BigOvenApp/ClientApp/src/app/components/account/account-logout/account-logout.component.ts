import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";

@Component({
  selector: 'app-account-logout',
  templateUrl: './account-logout.component.html',
  styleUrls: ['./account-logout.component.scss']
})
export class AccountLogoutComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: BigOvenAuthService
  ) { }

  ngOnInit() {
    this.authService.logOut();
  }

}
