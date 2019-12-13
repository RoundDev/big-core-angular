import { Component, OnInit } from '@angular/core';
// import { RecipeSearchService } from '../../shared/recipesearch.service';
import { Router } from '@angular/router';
import {RecipeSearchService} from "../../shared/services/recipeSearch.service";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  private searchText: string = "";
  private subscription: any;

  constructor(
    private recipesearchService:RecipeSearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.recipesearchService.getSearchCompletedEmitter()
      .subscribe(status => this.onSearchCompleted(status));
  }

  onSearchCompleted(status)
  {
    this.searchText = this.recipesearchService.getSearchText();
    console.log(this.searchText);
  }

  setSearchText(value)
  {
    this.searchText = value;
  }

  getSearchText()
  {
    return this.searchText;
  }

  keyDownFunction(event)
  {
    if(event.keyCode == 13) {
      //alert('you just clicked enter');
      //console.log(event);
      //alert(event.target.value);
      let searchText = event.target.value;

      // now route it
      event.target.blur();

      this.router.navigate(["/recipes",searchText,"best"]);
      this.recipesearchService.doRecipeSearch(searchText, 1, 20);


    }
  }

}
