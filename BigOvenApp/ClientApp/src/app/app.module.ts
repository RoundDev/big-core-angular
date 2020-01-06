import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {ExtraOptions, RouterModule} from '@angular/router';
import {ApiClientService} from "../../output/api2";
import {BigOvenAuthService, ModalContentComponent} from "./shared/services/bigovenauth.service";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { IdeasHomeComponent } from './components/ideas-home/ideas-home.component';
import {AuthGuardService} from "./shared/services/auth-guard.service";
import {CookieService} from "ngx-cookie-service";
import {
  BsDropdownModule,
  BsModalService,
  ModalModule,
  PaginationModule,
  RatingModule,
  TabsModule,
  TypeaheadModule,

} from "ngx-bootstrap";
import { UrlpathPipe } from './shared/pipes/urlpath.pipe';
import { RavesHomeComponent } from './components/raves-home/raves-home.component';
import {StarRatingModule} from "angular-star-rating";
import { FooterComponent } from './components/footer/footer.component';
import { CollectionViewComponent } from './components/collection-view/collection-view.component';
import { RecipeResultsComponent } from './components/recipe/recipe-results/recipe-results.component';
import { RecipeInfoboxComponent } from './components/recipe/recipe-infobox/recipe-infobox.component';
import { RecipeIdeasComponent } from './components/recipe/recipe-ideas/recipe-ideas.component';
import { SeasonalIdeasComponent } from './components/seasonal-ideas/seasonal-ideas.component';
import { IdeasByCourseComponent } from './components/ideas-by-course/ideas-by-course.component';
import { RecipeCourseTileComponent } from './components/recipe/recipe-course-tile/recipe-course-tile.component';
import { CategoryBrowseComponent } from './components/category-browse/category-browse.component';
import { SeoifyPipe } from './shared/pipes/seoify.pipe';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { RecipeDetailInfoBoxComponent } from './components/recipe/recipe-detail-info-box/recipe-detail-info-box.component';
import { TimeConverterPipe } from './shared/pipes/time-converter.pipe';
import { RecipeDetailReviewBoxComponent } from './components/recipe/recipe-detail-review-box/recipe-detail-review-box.component';
import { RecipeDetailTabsComponent } from './components/recipe/recipe-detail-tabs/recipe-detail-tabs.component';
import { RecipeInstructionsComponent } from './components/recipe/recipe-instructions/recipe-instructions.component';
import { SocialMediaShareComponent } from './components/recipe/social-media-share/social-media-share.component';
import { AccountJoinComponent } from './components/account/account-join/account-join.component';
import { AccountLoginComponent } from './components/account/account-login/account-login.component';
import { AccountLogoutComponent } from './components/account/account-logout/account-logout.component';
import { UpgradeNudgeComponent } from './components/account/upgrade-nudge/upgrade-nudge.component';
import { UserBarComponent } from './components/user/user-bar/user-bar.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { RecipeSearchViewComponent } from './components/recipe/recipe-search-view/recipe-search-view.component';
import { CommaSeparatedNumberPipe } from './shared/pipes/comma-seperated-number.pipe';
import { StringNoLongerPipe } from './shared/pipes/string-no-longer.pipe';
import {UserService} from "./shared/services/user.service";
import {AuthService, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider} from "angular4-social-login";
import {GlobalEventsManager} from "./shared/globaleventsmanager";
import {GroceryService} from "./shared/services/grocery.service";
import {GlobalVars} from "./shared/globalvars";
import {RecipeSearchService} from "./shared/services/recipeSearch.service";
import { TofractionPipe } from './shared/pipes/tofraction.pipe';
import {ErrorInterceptor} from "./shared/httpinterceptor";
import { HreftorouterlinkPipe } from './shared/pipes/hreftorouterlink.pipe';
import { StepsFormatPipe } from './shared/pipes/steps-format.pipe';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatTabsModule} from "@angular/material/tabs";
import { AccountForgotComponent } from './components/account/account-forgot/account-forgot.component';
import { AccountMeComponent } from './components/account/account-me/account-me.component';
import { AccountSetNewPasswordComponent } from './components/account/account-set-new-password/account-set-new-password.component';
import { RecipeReviewsComponent } from './components/recipe/recipe-reviews/recipe-reviews.component';
import { RecipeReviewReplyComponent } from './components/recipe/recipe-review-reply/recipe-review-reply.component';
import {MomentModule} from "angular2-moment";
import { AccountEnsureLoginComponent } from './components/account/account-ensure-login/account-ensure-login.component';
import { AboutComponent } from './components/about/about.component';
import { ProBuyComponent } from './components/pro-buy/pro-buy/pro-buy.component';
import { ProFeaturesComponent } from './components/pro-buy/pro-features/pro-features.component';
import { MyRecipesComponent } from './components/user/my-recipes/my-recipes.component';
import { FolderListComponent } from './components/user/folder-list/folder-list.component';
import { RecipeNutritionBoxComponent } from './components/recipe/recipe-nutrition-box/recipe-nutrition-box.component';
import { RecipePostComponent } from './components/recipe/recipe-post/recipe-post.component';
import { RecipeCategoryChooserComponent } from './components/recipe/recipe-category-chooser/recipe-category-chooser.component';
import { RecipeIngredientListComponent } from './components/recipe/recipe-ingredient-list/recipe-ingredient-list.component';
import { RecipeIngredientLineEditorComponent } from './components/recipe/recipe-ingredient-line-editor/recipe-ingredient-line-editor.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



// export function createTranslateLoader(http: HttpClient, baseHref) {
//   // Temporary Azure hack
//   if (baseHref === null && typeof window !== 'undefined') {
//     baseHref = window.location.origin;
//   }
//   // i18n files are in `wwwroot/assets/`
//   return new TranslateHttpLoader(http, `${baseHref}/assets/i18n/`, '.json');
// }

let socialAuthConfig = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    //provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
    provider: new GoogleLoginProvider("407086068012-mve22iglck9ud0t8kcnnbhc1v31fctk5.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    //provider: new FacebookLoginProvider("Facebook-App-Id") // ********* production
    provider: new FacebookLoginProvider("1093865790642375") // localhost
  }
]);

export function provideConfig() {
  return socialAuthConfig;
}
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SearchBoxComponent,
    SearchBoxComponent,
    IdeasHomeComponent,
    ModalContentComponent,
    UrlpathPipe,
    RavesHomeComponent,
    FooterComponent,
    CollectionViewComponent,
    RecipeResultsComponent,
    RecipeInfoboxComponent,
    RecipeIdeasComponent,
    SeasonalIdeasComponent,
    IdeasByCourseComponent,
    RecipeCourseTileComponent,
    CategoryBrowseComponent,
    SeoifyPipe,
    RecipeDetailComponent,
    RecipeDetailInfoBoxComponent,
    TimeConverterPipe,
    RecipeDetailReviewBoxComponent,
    RecipeDetailTabsComponent,
    RecipeInstructionsComponent,
    SocialMediaShareComponent,
    AccountJoinComponent,
    AccountLoginComponent,
    AccountLogoutComponent,
    UpgradeNudgeComponent,
    UserBarComponent,
    UserDetailComponent,
    RecipeSearchViewComponent,
    CommaSeparatedNumberPipe,
    StringNoLongerPipe,
    TofractionPipe,
    HreftorouterlinkPipe,
    StepsFormatPipe,
    AccountForgotComponent,
    AccountMeComponent,
    AccountSetNewPasswordComponent,
    RecipeReviewsComponent,
    RecipeReviewReplyComponent,
    AccountEnsureLoginComponent,
    AboutComponent,
    ProBuyComponent,
    ProFeaturesComponent,
    MyRecipesComponent,
    FolderListComponent,
    RecipeNutritionBoxComponent,
    RecipePostComponent,
    RecipeCategoryChooserComponent,
    RecipeIngredientListComponent,
    RecipeIngredientLineEditorComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    MatTabsModule,
    FontAwesomeModule,
    StarRatingModule.forRoot(),
    TypeaheadModule.forRoot(),
    MomentModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'counter', component: CounterComponent},
      {path: 'fetch-data', component: FetchDataComponent},
      {
        path: "account/join",
        component: AccountJoinComponent
      },
      {
        path: "account/login",
        component: AccountLoginComponent
      },
      {
        path: "account/logout",
        component: AccountLogoutComponent
      },
      {
        path: "account/forgot",
        component: AccountForgotComponent
      },
      {
        path: "account/me",
        component: AccountMeComponent
      },
      {
        path: "account/ensurelogin",
        component: AccountEnsureLoginComponent
      },
      {
        path: "myrecipes",
        component: MyRecipesComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "myrecipes/:userName",
        component: MyRecipesComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "myrecipes/:userName/:view",
        component: MyRecipesComponent
      },
      {
        path: "recipes/search",
        component: RecipeSearchViewComponent
      },
      {
        path: "recipes/search/page/:page",
        component: RecipeSearchViewComponent
      },
      {
        path: "recipes/:searchText/best",
        component: RecipeSearchViewComponent
      },
      {
        path: "recipes/:searchText/best/page/:page",
        component: RecipeResultsComponent
      },
      {
        path: "recipes/course",
        component: IdeasByCourseComponent
      },
      {
        path: "recipes",
        component: RecipeIdeasComponent
      },
      {
        path: "recipe-ideas",
        component: RecipeIdeasComponent
      },
      // {
      //     path: "ideas-home",
      //     component: IdeasHomeComponent
      // },
      {
        path: "recipe/:title/:recipeId",
        component: RecipeDetailComponent
      },
      {
        path: "recipe/:title/:recipeId/resized/:resize",
        component: RecipeDetailComponent
      },
      {
        path: "recipe/:title/:recipeId/resized/:metric/:resize",
        component: RecipeDetailComponent
      },
      {
        path: "recipe-ideas/:title/:collId",
        component: CollectionViewComponent
      },
      {
        path: "recipe-ideas/:title/:collId/page/:page",
        component: CollectionViewComponent
      },
      {
        path: "recipe/post",
        component: RecipePostComponent
      },
      {
        path: "pro",
        component: ProBuyComponent
      },
      {
        path: "pro/features",
        component: ProFeaturesComponent
      },
      {
        path: "user/:username",
        component: UserDetailComponent
      },
      {
        path: "site/about",
        component: AboutComponent
      },

    ] ,routerOptions),
    PaginationModule.forRoot(),
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    MatTabsModule
  ],
  exports: [MatTabsModule],
  providers: [
    RecipeSearchService,
    UserService,
    AuthGuardService,
    AuthService,
    BigOvenAuthService,
    GroceryService,
    GlobalEventsManager,
    GlobalVars,
    ApiClientService,
    SeoifyPipe,
    StringNoLongerPipe,
    CookieService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
