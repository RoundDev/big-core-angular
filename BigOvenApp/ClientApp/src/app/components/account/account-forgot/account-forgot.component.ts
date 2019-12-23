import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-account-forgot',
  templateUrl: './account-forgot.component.html',
  styleUrls: ['./account-forgot.component.scss']
})
export class AccountForgotComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    let email = form.value.email;
    this.userService.SendForgotPasswordEmail(email);
  }

}
