import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
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
import {BsModalService, PaginationModule} from "ngx-bootstrap";
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
    RecipeCourseTileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'counter', component: CounterComponent},
      {path: 'fetch-data', component: FetchDataComponent},
      {
        path: "recipe-ideas/:title/:collId",
        component: CollectionViewComponent
      },
      {
        path: "recipe-ideas/:title/:collId/page/:page",
        component: CollectionViewComponent
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

    ]),
    PaginationModule
  ],
  providers: [
    ApiClientService,
    BigOvenAuthService,
    AuthGuardService,
    CookieService,
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
