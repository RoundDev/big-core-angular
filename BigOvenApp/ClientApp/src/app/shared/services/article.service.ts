import { Injectable } from '@angular/core';
import {BigOvenAuthService} from "./bigovenauth.service";
import {ApiClientService} from "../../../../output/api2";
import {BigOvenModelAPIArticle} from "../../../../output/models";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  article: BigOvenModelAPIArticle = null;

  constructor(
    private bigovenAuthService: BigOvenAuthService,
    private apiClientService: ApiClientService
  ) { }

  getArticleByKeyword(kw: string) {
    return this.apiClientService.Article_Get(kw);
  }

  updateArticle(kw: string, articleHTML:string) {
    return this.apiClientService.Article_Put(kw, articleHTML);

  }
}
