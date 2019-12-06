import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  // @Input()
  // userInfoJWT: JWTInfo = null;
  collapse: string = 'collapse';
  isLoggedIn: boolean = false;
  // private inboxItems: BigOvenModelAPI2InboxNotification[] = [];
  private sub: any = null;
  showNav = true;

  constructor(
    // private userService: UserService,
    // private bigovenAuthService: BigOvenAuthService
  ){
    // if (this.sub===null)
    // {
    //   this.sub = this.userService.getOnInboxItemsEventEmitter().subscribe(data => {
    //     this.inboxItems = this.userService.getInboxItems();
    //   });
    // }
    //
    // this.bigovenAuthService.getOnBigOvenUserLoginStateChangeEventEmitter().subscribe(data=>{
    //   if (data!=null) {
    //     this.userInfoJWT = data;
    //     if (this.bigovenAuthService.isLoggedIn())
    //     {
    //       this.userService.getSocialInbox(1, 10, null);
    //     }
    //
    //   } else
    //   {
    //     this.userInfoJWT = null;
    //   }
    // });

  }

  ngOnInit()
  {
    // this.bigovenAuthService.getOnBigOvenUserLoginStateChangeEventEmitter().subscribe(data=>{
    //     this.isLoggedIn = this.bigovenAuthService.isLoggedIn();
    //
    //     this.bigovenAuthService.getOnBigOvenUserLoginStateChangeEventEmitter().subscribe(data=>{
    //         this.userInfoJWT = null;
    //     })
    // });
  }

  collapseNavbar(): void {
    if (this.collapse.length > 1) {
      this.collapse = '';
    } else {
      this.collapse = 'collapse';
    }
  }

  collapseMenu() {
    this.collapse = 'collapse';
  }

}
