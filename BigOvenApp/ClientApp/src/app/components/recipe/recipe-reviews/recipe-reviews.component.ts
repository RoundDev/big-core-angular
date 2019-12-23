import {Component, Input, OnInit} from '@angular/core';
import {BigOvenModelAPI2Recipe, BigOvenModelAPIReview} from "../../../../../output/models";
import {RecipeSearchService} from "../../../shared/services/recipeSearch.service";

@Component({
  selector: 'app-recipe-reviews',
  templateUrl: './recipe-reviews.component.html',
  styleUrls: ['./recipe-reviews.component.scss']
})
export class RecipeReviewsComponent implements OnInit {

  @Input()
  recipe: BigOvenModelAPI2Recipe;
  reviews: BigOvenModelAPIReview[] = [];
  public isReadonly: boolean = true;

  constructor(private recipeSearchService: RecipeSearchService) {
  }

  ngOnInit() {
    this.getReviews();
    this.recipeSearchService.getOnReviewUpdatedEventEmitter().subscribe(data => {
      this.getReviews();
    });
  }

  getReviews() {
    this.recipeSearchService.getReviewsForRecipe(this.recipe.RecipeID, 1, 10).subscribe(data => {
      this.reviews = data.body;
    });
  }

}
