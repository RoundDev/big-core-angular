import { Component, OnInit } from '@angular/core';
// import {FancyImageUploaderOptions, UploadedFile} from "ng2-fancy-image-uploader";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-account-me',
  templateUrl: './account-me.component.html',
  styleUrls: ['./account-me.component.scss']
})
export class AccountMeComponent implements OnInit {

  photoUrl: string;

  // fancyUploaderOptions: FancyImageUploaderOptions = {
  //   thumbnailHeight: 150,
  //   thumbnailWidth: 150,
  //   uploadUrl: 'https://api2beta.bigoven.com/user/image',
  //   allowedImageTypes: ['image/png', 'image/jpeg'],
  //   maxImageSize: 3,
  //   withCredentials: true,
  //   authToken: this.bigovenAuthService.getJWT(),
  //   authTokenPrefix: "Bearer",
  //   //customHeaders: new HttpHeaders().append("X-BigOven-API-Key", "glFUKikehWjLW900etpS564VgIzOWSW5")
  //   //customHeaders:  [{ name: 'X-BigOven-API-Key', value : 'glFUKikehWjLW900etpS564VgIzOWSW5' } ]
  //   customHeaders: [{
  //     "X-BigOven-API-Key":"glFUKikehWjLW900etpS564VgIzOWSW5"
  //   }]
  // };

  constructor(
    private bigovenAuthService:BigOvenAuthService,
    private userService:UserService  ) {

    this.photoUrl = this.bigovenAuthService.photoUrlFromJWT();

    this.bigovenAuthService.getOnBigOvenUserLoginStateChangeEventEmitter().subscribe(
      data=>{
        this.photoUrl = this.bigovenAuthService.photoUrlFromJWT();
      })
  }

  ngOnInit() {
  }

  // onFancyUpload(file: UploadedFile) {
  //   if (file.response)
  //   {
  //     let msg =  JSON.parse(file.response).Message;
  //
  //     if (msg === "User not authorized") {
  //       alert("Session expired. Please sign in again.");
  //     }
  //   } else {
  //     // success -- get a new JWT because the old one has outdated photoUrl
  //     this.bigovenAuthService.RefreshJWT();
  //     this.photoUrl = this.bigovenAuthService.photoUrlFromJWT();
  //   }
  // }

}
