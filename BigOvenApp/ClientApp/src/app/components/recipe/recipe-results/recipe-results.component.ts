import {Component, Input, OnInit} from '@angular/core';
import {BigOvenModelAPI2RecipeSearchResult} from "../../../../../output/models";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeSearchService} from "../../../shared/services/recipeSearch.service";

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.scss']
})
export class RecipeResultsComponent implements OnInit {

  private itemsPerPage: number = 24;
  private currentPage: number = 1;

  @Input() private showPagination: boolean = true;
  @Input() private categoryName: string;
  @Input() private subcategoryName: string;
  @Input() private categoryInt: number;
  @Input() private subcategoryInt: number;


  searchText: string; // the most common type of search, just a simple keyword search

  subscription: any;
  @Input() recipeResults: BigOvenModelAPI2RecipeSearchResult;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeSearchService: RecipeSearchService) { }

  ngOnInit() {

    // get route params
    this.route.params.subscribe(
      params => {
        this.currentPage = parseInt(params['page']) || 1;
        // if (this.route.snapshot.queryParams["pg"])
        // {
        //   this.currentPage = parseInt(this.route.snapshot.queryParams["pg"]);
        // }

        this.itemsPerPage = parseInt(params['rpp']) || 24;

        this.searchText = params['searchText'];
        if (params['any_kw']) { this.searchText = params['any_kw']; }
        if (this.searchText != null) {
          this.recipeSearchService.doRecipeSearch(this.searchText, this.currentPage, this.itemsPerPage);
        } else
        if (this.subcategoryName)
        {
          // alert("doing new subcat search");
          // alert("category"+this.categoryName);
          // alert("subcategory"+this.subcategoryName);

          this.recipeSearchService.doRecipeSearchByCategorySubcategory(this.categoryInt,this.subcategoryInt,this.currentPage, this.itemsPerPage);
          // do the category search
        }
      }
    );

    // subscribe to search completed, so we know when it's done
    this.subscription = this.recipeSearchService.getSearchCompletedEmitter()
      .subscribe(status => this.onSearchCompleted(status));
  }

  onSearchCompleted(status: string): any {
    // recipeResults
    this.recipeResults = this.recipeSearchService.recipeResults;
    this.searchText = this.recipeSearchService.getSearchText();
  }

  pageChanged(event) {
    let newPageNo=event.page;

    if (this.searchText) {
      if (newPageNo === 1) {
        this.router.navigate(['recipes', this.searchText, 'best']);
      } else {
        this.router.navigate(['recipes', this.searchText, 'best', 'page', newPageNo]);
      }
    } else
    {
      if (this.subcategoryName) // this is browsing category/subcategory
      {
        if (newPageNo === 1) {
          this.router.navigate(['recipes', this.categoryName, this.subcategoryName]);
        } else {
          this.router.navigate(['recipes', this.categoryName, this.subcategoryName, 'page', newPageNo]);
        }
      }
    }


    console.log(this.route.snapshot.url);

    if (this.route.snapshot.url.length>1)
    {
      if (this.route.snapshot.url[1].path==="search")
      {
        if (newPageNo === 1) {
          this.router.navigate(['recipes','search'], {queryParams: this.route.snapshot.queryParams});
        } else {
          this.router.navigate(['recipes', 'search', 'page', newPageNo], {queryParams: this.route.snapshot.queryParams});
        }
      }
    }

  }

}
