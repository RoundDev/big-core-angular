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
    RecipeInfoboxComponent
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
