import {Component, Input, OnInit} from '@angular/core';
import {DecimalPipe, PercentPipe} from "@angular/common";
import {BigOvenModelAPI2Recipe} from "../../../../../output/models/Recipe/bigovenmodelapi2recipe.model";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";

@Component({
  selector: 'app-recipe-nutrition-box',
  templateUrl: './recipe-nutrition-box.component.html',
  styleUrls: ['./recipe-nutrition-box.component.scss'],
  providers: [PercentPipe, DecimalPipe]
})
export class RecipeNutritionBoxComponent implements OnInit {
  @Input()
  recipe: BigOvenModelAPI2Recipe;
  isPro: boolean = false;

  constructor(private bigovenAuthService:BigOvenAuthService) {
    this.isPro = this.bigovenAuthService.isPro();
  }

  ngOnInit() {
  }

}
