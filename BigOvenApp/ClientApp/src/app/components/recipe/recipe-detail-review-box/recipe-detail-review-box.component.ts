import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {BigOvenModelAPIRecipe, BigOvenModelAPIReview} from "../../../../../output/models";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";
import {RecipeSearchService} from "../../../shared/services/recipeSearch.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recipe-detail-review-box',
  templateUrl: './recipe-detail-review-box.component.html',
  styleUrls: ['./recipe-detail-review-box.component.scss']
})
export class RecipeDetailReviewBoxComponent implements OnInit {

  rate: number;
  @Input()
  recipe: BigOvenModelAPIRecipe;
  review: BigOvenModelAPIReview;
  comment: string = "";
  buttonLabel: string = 'Sign in to add review';

  constructor(
    public bigovenAuthService:BigOvenAuthService,
    private recipeSearchService:RecipeSearchService
  ) { }

  ngOnInit() {

    if (this.bigovenAuthService.isLoggedIn())
    {
      this.recipeSearchService.GetMyRecipeReview(this.recipe.RecipeID).subscribe(data =>{
          this.review = data.body;
          console.log("Review:" + " " + this.review);
          this.comment = data.body.Comment;
          this.rate = data.body.StarRating;
          this.buttonLabel = "Update My Review";
        },
        err=>{
          console.log(err);
        })
    }

  }
  ngOnChanges() {
    console.log("Rate:" + "" + this.rate);
  }

  onSubmit(form: NgForm)
  {
    this.recipeSearchService.AddOrUpdateRecipeReview(this.recipe.RecipeID, this.rate, form.value.comment).subscribe(
      data=>{
        this.recipeSearchService.getOnReviewUpdatedEventEmitter().emit("updated");
      }
    );
  }

}
