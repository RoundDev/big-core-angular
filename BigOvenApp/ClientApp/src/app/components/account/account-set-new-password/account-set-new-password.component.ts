import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-account-set-new-password',
  templateUrl: './account-set-new-password.component.html',
  styleUrls: ['./account-set-new-password.component.scss']
})
export class AccountSetNewPasswordComponent implements OnInit {

  private email="";
  private code="";
  buttonText = "Set new password";
  statusMessage = "";

  constructor(
    private route: ActivatedRoute,
    private userService:UserService
  ) {
    this.userService.getOnPasswordUpdatedEventEmitter().subscribe(data=>{
      this.statusMessage = data;
      this.buttonText = "Set new password";
    });
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.email = params['email'];
        this.code = params['code'];
      });

    // do something with this.code and this.accesstoken
  }

  onSubmit(form: NgForm)
  {
    // server will determine if code is valid
    let password = form.value.password;
    this.buttonText = "Updating...";

    this.userService.UpdatePasswordWithCode(this.email, this.code, password);

  }

}
