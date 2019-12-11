import {Component, Input, OnInit} from '@angular/core';
import {BigOvenModelRecipeCategory} from "../../../../output/models";
import {RecipeSearchService} from "../../shared/services/recipeSearch.service";

@Component({
  selector: 'app-category-browse',
  templateUrl: './category-browse.component.html',
  styleUrls: ['./category-browse.component.scss']
})
export class CategoryBrowseComponent implements OnInit {

  categories: BigOvenModelRecipeCategory[];
  private categorystubs: string[] = ['','appetizers','bread','breakfast','desserts','drinks','main-dish','salad','side-dish','soups-stews-and-chili','marinades-and-sauces','other'];
  private categoryIndex: number = 0;

  @Input()
  category: string;

  constructor(private recipeService: RecipeSearchService) { }

  ngOnInit() {
    this.recipeService.getCategoriesLoadedEmitter().subscribe(
      done=>{
        this.categoriesLoaded();
      }
    )
    this.recipeService.getAllCategories();
  }
  categoriesLoaded()
  {
    // get index
    //this.categories = ;

    let mycat = this.categorystubs.findIndex(x=>x==this.category);
    this.categories = this.recipeService.categories.filter(x=>x.ParentID==mycat);
//        console.log(this.categories);
  }

}
