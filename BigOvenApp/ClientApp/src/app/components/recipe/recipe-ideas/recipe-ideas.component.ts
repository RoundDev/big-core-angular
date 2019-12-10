import { Component, OnInit } from '@angular/core';
import {BigOvenModelAPI2CollectionInfo} from "../../../../../output/models";
import {RecipeSearchService} from "../../../shared/services/recipeSearch.service";

@Component({
  selector: 'app-recipe-ideas',
  templateUrl: './recipe-ideas.component.html',
  styleUrls: ['./recipe-ideas.component.scss']
})
export class RecipeIdeasComponent implements OnInit {


  collectionResults: BigOvenModelAPI2CollectionInfo[];
  subscription: any;

  constructor(private recipeSearchService: RecipeSearchService) { }

  ngOnInit() {
    this.subscription = this.recipeSearchService.getSearchCompletedEmitter()
      .subscribe(status => this.onSearchCompleted(status));

    this.recipeSearchService.getAllCollections();
  }

  onSearchCompleted(status)
  {

    this.collectionResults = this.recipeSearchService.collectionResults.slice(0,10);

  }

}
