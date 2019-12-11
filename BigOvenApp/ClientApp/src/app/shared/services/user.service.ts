import {EventEmitter, Injectable} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {
  BigOvenModelAPI2FolderProperty,
  BigOvenModelAPI2InboxNotification,
  BigOvenModelAPI2RecipeSearchResult, BigOvenModelAPIUserInfoTiny
} from "../../../../output/models";
import {ApiClientService} from "../../../../output/api2";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router} from "@angular/router";
import {BigOvenAuthService} from "./bigovenauth.service";
import {HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _inboxItems: BigOvenModelAPI2InboxNotification[] = [];

  recipesInActiveFolder: BigOvenModelAPI2RecipeSearchResult;
  private onFolderListComplete: EventEmitter<string> = new EventEmitter<string>();
  private onRecipesLoadedForFolder: EventEmitter<string> = new EventEmitter<string>();
  private onFolderChanged: EventEmitter<BigOvenModelAPI2FolderProperty> = new EventEmitter<BigOvenModelAPI2FolderProperty>();
  private onPasswordUpdated: EventEmitter<string> = new EventEmitter<string>();

  private onInboxItemsLoaded: EventEmitter<string> = new EventEmitter<string>();




  private subscription: Subscription;


  folders: BigOvenModelAPI2FolderProperty[] = [];
  activeFolder: BigOvenModelAPI2FolderProperty = null;

  constructor(
    private apiService: ApiClientService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService,
    private bigovenAuthService: BigOvenAuthService
  ) { }

  ngOnDestroy() {
    if (this.subscription!=null)
    {
      this.subscription.unsubscribe();
    }
  }

  public getOnPasswordUpdatedEventEmitter()
  {
    return this.onPasswordUpdated;
  }

  public getInboxItems(): BigOvenModelAPI2InboxNotification[]
  {
    return this._inboxItems;
  }
  public getOnInboxItemsEventEmitter()
  {
    return this.onInboxItemsLoaded;
  }

  public getNotesByUserRecipe(recipeId: number, pg: number, rpp:number)
  {
    if (!this.bigovenAuthService.isLoggedIn())
    {
      return null;
    }
    return this.apiService.Note_GetNotes(recipeId, pg, rpp);
  }

  public getSocialInbox(pg: number, rpp: number, since:string)
  {
    this.apiService.Social_Inbox(pg, rpp, since).subscribe(data=>{
      this._inboxItems = data.body;
      this.onInboxItemsLoaded.emit("done");
    })

  }


  public getOnCompletedEventEmitter() {
    return this.onFolderListComplete;
  }

  public getOnFolderChangedEventEmitter() {
    return this.onFolderChanged;
  }

  public getonRecipesLoadedForFolderEmitter() {
    return this.onRecipesLoadedForFolder;
  }

  public getFolders() {
    this.apiService.Folder_GetFolders(1, 1000)
      .subscribe(data => {
        this.folders = data.body;
        console.log(data.body);
        this.onFolderListComplete.emit("complete");
      });
  }

  public getRecipesInFolder(folder: BigOvenModelAPI2FolderProperty, userId: number) {
    console.log('get recipes in folder ' + folder.Name);
    this.apiService.Folder_Recipes(folder.Name, null, userId, 1, 50)
      .subscribe(data => {
        console.log("DONE!");
        this.recipesInActiveFolder = data.body;
        //console.log(this.recipesInActiveFolder);
        this.onRecipesLoadedForFolder.emit("complete");
      });
  }

  public SendForgotPasswordEmail(em): boolean {
    let result = true;

    this.apiService.User_Forgot({email: em }).subscribe(data=>{
      console.log("Sent!");
    })
    return result;
  }

  public UpdatePasswordWithCode(email, code, password) {

    this.apiService.User_UpdatePassword({email: email, code: code, password: password}).subscribe(

      data=>{
        if (data.status!=200)
        {
          this.onPasswordUpdated.emit("Invalid request.");
        } else
        {
          this.onPasswordUpdated.emit(data.body.Message);
        }
      },
      err=>{
        this.onPasswordUpdated.emit(err.error.Message);

      }

    )}



  public getUser(username:string)
  {
    return this.apiService.User_Get(username);
  }

  public getFollowers(userId:number, pg:number, rpp:number): Observable<HttpResponse<BigOvenModelAPIUserInfoTiny[]>>
  {
    return this.apiService.User_FollowersOfUser(userId, pg, rpp);
  }

  public getFollowing(userId:number, pg:number, rpp:number): Observable<HttpResponse<BigOvenModelAPIUserInfoTiny[]>>
  {
    return this.apiService.User_Follows(userId, pg, rpp);

  }


  public followUser(userId:number)
  {
    return this.apiService.User_FollowAdd({userId:userId});

  }

  public unfollowUser(userId:number)
  {
    return this.apiService.User_Follow_Delete(userId);
  }

}
