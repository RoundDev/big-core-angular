import { Component, OnInit } from '@angular/core';
import {BigOvenModelAPI2RecipeSearchResult} from "../../../../../output/models";
import {ActivatedRoute} from "@angular/router";
import {RecipeSearchService} from "../../../shared/services/recipeSearch.service";

@Component({
  selector: 'app-recipe-searchview',
  templateUrl: './recipe-searchview.component.html',
  styleUrls: ['./recipe-searchview.component.css']
})
export class RecipeSearchviewComponent implements OnInit {

  sub: any;
  sub1: any;

  include_ing: string;
  recipeSearchResults: BigOvenModelAPI2RecipeSearchResult;
  currentPage: number = 1;

  constructor(
    private route: ActivatedRoute,
    private recipesearchService: RecipeSearchService
  ) { }

  ngOnInit() {
    // subscribe to results to be able to paint them
    this.recipesearchService.getSearchCompletedEmitter().subscribe(data=>{
      this.recipeSearchResults = this.recipesearchService.recipeResults;
    });

    this.sub1 = this.route.params.subscribe(params=>{
      if (params["page"])
      {
        this.currentPage = parseInt(params["page"]);
        this.recipesearchService.doRecipeSearchAllParams(this.include_ing, this.currentPage, 24);
      }
    });

    this.sub = this.route.queryParams.subscribe(qparams => {
      this.include_ing = qparams["include_ing"];

      // now load recipesearchresults
      this.recipesearchService.doRecipeSearchAllParams(this.include_ing, this.currentPage, 24);
    });
  }

}
