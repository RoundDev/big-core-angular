import {Component, OnInit, TemplateRef} from '@angular/core';
import {
  BigOvenModelAPI2RecipeSearchResult,
  BigOvenModelAPIUser,
  BigOvenModelAPIUserInfoTiny
} from "../../../../../output/models";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";
import {DomSanitizer} from "@angular/platform-browser";
import {RecipeSearchService} from "../../../shared/services/recipeSearch.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  backgroundImageStyle: any;
  targetUser: BigOvenModelAPIUser = null;
  username: string = null;
  isMe: boolean = false;
  sub: any = null;
  avatarUrl: string = null;
  recipeCount: number = 0;
  followingCount: number = 0;
  followersCount: number = 0;
  itemsPerPage: number = 40;
  currentPage: number = 1;
  any_kw: string = null;
  chosenRecipeId?: number = null;

  isRecipesShown: boolean = true;
  isFollowersShown: boolean = false;
  isFollowingShown: boolean = false;

  private followersOfMe: BigOvenModelAPIUserInfoTiny[] = [];
  private usersIamfollowing: BigOvenModelAPIUserInfoTiny[] = [];

  modalRef: BsModalRef;

  recipeResults: BigOvenModelAPI2RecipeSearchResult;

  constructor(private userService: UserService,
              private recipeSearchService: RecipeSearchService,
              private bigovenAuthService: BigOvenAuthService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private modalService: BsModalService
  ) { }

  ngOnInit() {

    if (this.sub === null) {
      this.sub = this.route.params.subscribe(params => {
        this.username = params['username'];

        // get the user
        this.userService.getUser(this.username).subscribe(
          data => {
            this.targetUser = data.body;
            console.log(this.targetUser);
            if (this.bigovenAuthService.isLoggedIn())
            {
              this.isMe = (this.bigovenAuthService.userIdFromJWT()==this.targetUser.UserID);
            }
            this.targetUser.BackgroundUrl = this.targetUser.BackgroundUrl || "https://bigoven-res.cloudinary.com/image/upload/up-bg-1.jpg";

            this.backgroundImageStyle = this.sanitizer.bypassSecurityTrustStyle('url("' + this.targetUser.BackgroundUrl + '")');
            let filename = this.targetUser.PhotoUrl.substring(this.targetUser.PhotoUrl.lastIndexOf('/') + 1);;
            this.avatarUrl = "https://bigoven-res.cloudinary.com/image/upload/t_recipe-128,d_avatar-default.png/avatar/" + filename;

            this.isRecipesShown = true;
            this.isFollowersShown = false;
            this.isFollowingShown = false;
            this.followersCount = this.targetUser.FollowersCount;
            this.followingCount = this.targetUser.FollowingCount;
            this.recipeCount = this.targetUser.PublicRecipeCount;
          },
          err => {
            console.log(err);
          });

        // and in parallel get their recipes
        this.recipeSearchService.getPublicRecipesByUser(this.username, this.currentPage, this.itemsPerPage, this.any_kw).subscribe(
          data => {
            this.recipeResults = data.body;
          },
          err => { }
        );
      });
    }

    // any time follower count changes, be sure to update
    this.bigovenAuthService.getonUsersImFollowingLoadedEventEmitter().subscribe(data=>{
      if (this.isMe)
      {
        this.followingCount = this.bigovenAuthService.getUsersImFollowing().length;
      }
    });

  }

  keyUpSearchCooks(event) {
    if (event.keyCode === 13) {
      this.searchCookRecipes(event.target.value);
    }

  }
  searchCookRecipes(val) {
    this.any_kw = val;
    this.recipeSearchService.getPublicRecipesByUser(this.username, this.currentPage, this.itemsPerPage, this.any_kw).subscribe(
      data => {
        this.recipeResults = data.body;
      },
      err => { }
    );
  }

  sendMessage(template: TemplateRef<any>) {
    this.bigovenAuthService.nudgeIfNotAuthenticated('/'+this.route.snapshot.url.join('/'));

    if (this.bigovenAuthService.isLoggedIn())
    {
      this.modalRef = this.modalService.show(template);
    }
  }

  pageChanged(event) {
    this.currentPage = event.page;
    this.recipeSearchService.getPublicRecipesByUser(this.username, this.currentPage, this.itemsPerPage, this.any_kw).subscribe(
      data => {
        this.recipeResults = data.body;
      },
      err => { }
    );

  }

  chosen(recipeId)
  {
    this.chosenRecipeId = recipeId;
  }

  sendRecipe(form:NgForm)
  {
    this.recipeSearchService.sendRecipeToUser(this.username, form.value.comment, this.chosenRecipeId).subscribe(data=>{
      alert("Your recommendation has been sent.");
    });
  }

  showRecipes() {
    this.isFollowersShown = false;
    this.isFollowingShown = false;
    this.isRecipesShown = true;

  }

  showFollowers() {
    this.isFollowingShown = false;
    this.isRecipesShown = false;
    this.isFollowersShown = true;

    this.userService.getFollowers(this.targetUser.UserID, 1, 200).subscribe(
      data => {
        console.log(data);
        this.followersOfMe = data.body;
      },
      err => { }
    );

  }

  showFollowing() {
    this.isFollowersShown = false;
    this.isRecipesShown = false;
    this.isFollowingShown = true;

    this.userService.getFollowing(this.targetUser.UserID, 1, 200).subscribe(
      data => {
        console.log(data);
        this.usersIamfollowing = data.body;
      },
      err => { }
    );


  }

}
