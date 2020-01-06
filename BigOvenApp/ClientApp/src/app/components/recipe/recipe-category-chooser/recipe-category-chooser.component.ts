import {Component, OnInit} from '@angular/core';
import {RecipeSearchService} from "../../../shared/services/recipeSearch.service";
import {BigOvenModelRecipeCategory} from "../../../../../output/models";

@Component({
  selector: 'app-recipe-category-chooser',
  templateUrl: './recipe-category-chooser.component.html',
  styleUrls: ['./recipe-category-chooser.component.scss']
})
export class RecipeCategoryChooserComponent implements OnInit {

  mainCategory: number;
  subCategory: number;
  subcats: BigOvenModelRecipeCategory[] = [];

  constructor(private recipeSearchService: RecipeSearchService) {
  }

  ngOnInit() {

    this.recipeSearchService.getCategoriesLoadedEmitter().subscribe(
      data => {
      }
    );

    this.recipeSearchService.getAllCategories();

  }

  changeDrop() {
    console.log(this.mainCategory);
    // now go get the subcategories for this main category from server

    this.subcats = this.recipeSearchService.getSubcategoriesOfCategoryIndex(this.mainCategory);
    console.log(this.subcats);

  }

}
