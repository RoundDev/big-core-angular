import { Component, OnInit, Input } from '@angular/core';
import {BigOvenModelRecipeInfoReviewTuple2} from "../../../../output/models";
import {RecipeSearchService} from "../../shared/services/recipeSearch.service";

@Component({
  selector: 'app-raves-home',
  templateUrl: './raves-home.component.html',
  styleUrls: ['./raves-home.component.scss']
})
export class RavesHomeComponent implements OnInit {
  @Input()
  raves: BigOvenModelRecipeInfoReviewTuple2[];
  ravesResults: BigOvenModelRecipeInfoReviewTuple2[];
  subscription: any;

  constructor(private recipeSearchService: RecipeSearchService) { }

  ngOnInit() {
  }

}
