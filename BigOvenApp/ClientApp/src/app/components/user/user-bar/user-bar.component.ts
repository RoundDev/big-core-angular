import {Component, Input, OnInit} from '@angular/core';
import {BigOvenAuthService, JWTInfo} from "../../../shared/services/bigovenauth.service";
import {BigOvenModelAPI2InboxNotification, BigOvenModelAPI2UserInfoTinyx} from "../../../../../output/models";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {

  @Input() userInfoJWT: JWTInfo = null;
  private inboxItems: BigOvenModelAPI2InboxNotification[] = [];
  @Input()
  private userInfo: BigOvenModelAPI2UserInfoTinyx[] = [];
  private sub: any = null;

  constructor(
    private userService: UserService,
    private bigovenAuthService: BigOvenAuthService
  ) {
    if (this.sub===null)
    {
      this.sub = this.userService.getOnInboxItemsEventEmitter().subscribe(data => {
        this.inboxItems = this.userService.getInboxItems();
      });
    }

    this.bigovenAuthService.getOnBigOvenUserLoginStateChangeEventEmitter().subscribe(data=>{
      if (data!=null) {
        this.userInfoJWT = data;
        if (this.bigovenAuthService.isLoggedIn())
        {
          this.userService.getSocialInbox(1, 10, null);
        }

      } else
      {
        this.userInfoJWT = null;
      }
    });
  }

  ngOnInit() {
  }

  public onHidden(): void {
    console.log('Dropdown is hidden');
  }
  public onShown(): void {
    console.log('Dropdown is shown');
  }
  public isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

}
