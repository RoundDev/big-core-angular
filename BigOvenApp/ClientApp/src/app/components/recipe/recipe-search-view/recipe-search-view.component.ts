import { Component, OnInit } from '@angular/core';
import {BigOvenModelAPI2RecipeSearchResult} from "../../../../../output/models";
import {ActivatedRoute} from "@angular/router";
import {RecipeSearchService} from "../../../shared/services/recipeSearch.service";

@Component({
  selector: 'app-recipe-search-view',
  templateUrl: './recipe-search-view.component.html',
  styleUrls: ['./recipe-search-view.component.scss']
})
export class RecipeSearchViewComponent implements OnInit {

  sub: any;
  sub1: any;

  include_ing: string;
  recipeSearchResults: BigOvenModelAPI2RecipeSearchResult;
  currentPage: number = 1;

  constructor(
    private route: ActivatedRoute,
    private recipeSearchService: RecipeSearchService) { }

  ngOnInit() {
    // subscribe to results to be able to paint them
    this.recipeSearchService.getSearchCompletedEmitter().subscribe(data=>{
      this.recipeSearchResults = this.recipeSearchService.recipeResults;
    });

    this.sub1 = this.route.params.subscribe(params=>{
      if (params["page"])
      {
        this.currentPage = parseInt(params["page"]);
        this.recipeSearchService.doRecipeSearchAllParams(this.include_ing, this.currentPage, 24);
      }
    });

    this.sub = this.route.queryParams.subscribe(qparams => {
      this.include_ing = qparams["include_ing"];

      // now load recipesearchresults
      this.recipeSearchService.doRecipeSearchAllParams(this.include_ing, this.currentPage, 24);
    });
  }

}
