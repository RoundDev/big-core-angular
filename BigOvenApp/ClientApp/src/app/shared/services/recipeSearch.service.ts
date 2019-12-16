import {EventEmitter, Injectable} from '@angular/core';
import {
  API2ControllersNoteControllerNoteRequest, API2ControllersReviewControllerReviewRequest,
  BigOvenModelAPI2CollectionInfo, BigOvenModelAPI2RecipeSearchResult, BigOvenModelAPIReview,
  BigOvenModelRecipeCategory,
  BigOvenModelRecipeInfoReviewTuple2, SystemObject
} from "../../../../output/models";
import {ApiClientService} from "../../../../output/api2";
import {HttpResponse} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeSearchService {

  public collectionResults: BigOvenModelAPI2CollectionInfo[];
  public ravesResults: BigOvenModelRecipeInfoReviewTuple2[];
  private loading: boolean = false;
  public recipeResults: BigOvenModelAPI2RecipeSearchResult;
  private searchText = "";
  public categories: BigOvenModelRecipeCategory[];

  searchCompleted: EventEmitter<string> = new EventEmitter<string>();
  categoriesLoaded: EventEmitter<string> = new EventEmitter<string>();
  private onReviewUpdated: EventEmitter<string> = new EventEmitter<string>();

  constructor( private apiService:ApiClientService) {
    this.recipeResults = null;
  }

  public getOnReviewUpdatedEventEmitter()
  {
    return this.onReviewUpdated;
  }

  getSearchText(): string {
    return this.searchText;
  }

  public getSearchCompletedEmitter() {
    return this.searchCompleted;
  }

  public getCategoriesLoadedEmitter() {
    return this.categoriesLoaded;
  }

  public getRecipePhotos(recipeId:number, pg:number, rpp:number)
  {
    return this.apiService.Images_GetRecipePhotos(recipeId, pg, rpp);

  }

  public doRecipeSearch(term:string, pg:number, rpp:number) {
    this.loading = true;
    this.searchText = term;
    this.apiService.Recipe_RecipeSearch(term, null, null, null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null, null, null,
      null, null, rpp, pg, null, null, null, null, null,
      null, null, null, null, null, null, null, null, null
    ).subscribe( data => {
      this.loading = false;
      this.recipeResults = data.body;
      // let arrayJSON = JSON.stringify(this.recipeResults) ;
      // console.log("recipeResults JSON" + " " + arrayJSON + "\n" + "\n");
      this.searchCompleted.emit("complete");
    });
  }

  public doRecipeSearchAllParams(include_ing:string, pg:number, rpp:number) {
    this.loading = true;
    this.apiService.Recipe_RecipeSearch(null, null, null, null, null, null, null, null, null, null, null,
      null, null, null, include_ing, null, null, null, null, null, null,
      null, null, rpp, pg, null, null, null, null, null,
      null, null, null, null, null, null, null, null, null
    ).subscribe( data => {
      this.loading = false;
      this.recipeResults = data.body;
      this.searchCompleted.emit("complete");

    });
  }

  public doRecipeSearchByCategorySubcategory(categoryInt: number, subcategoryInt: number, pg, rpp:number)
  {
    //alert("Recipesearch service: doRecipeSearchByCategorySubcategory");

    this.apiService.Recipe_RecipeSearch(
      null, null, null, null, null, null,
      null, null, null, null,
      subcategoryInt.toString(), null,
      null, null, null, null, null, null, null,
      null, null, null, null, rpp, pg, null,
      null, null, null, null, null, null,null, null, null, null,null, null, null).subscribe(data=>{
      this.recipeResults = data.body;
      this.searchCompleted.emit("complete");
      console.log("Recipesearch complete: ");
//            console.log(data.body);
    });
  }

  public getRecipeCountByLeftovers(ing1: string, ing2: string, ing3:string)
  {
    let rpp = 1;
    let pg= 1;
    let include_ing="";
    if (ing1)
    {
      include_ing=ing1;
    }
    if (ing2)
    {
      include_ing+=","+ing2;
    }
    if (ing3)
    {
      include_ing+=","+ing3;
    }

    this.apiService.Recipe_RecipeSearch(
      null, null, null, null, null, null,
      null, null, null, null, null, null,
      null, null, include_ing, null, null, null, null,
      null, null, null, null, rpp, pg, null,
      null, null, null, null, null, null,null, null, null, null,null, null, null).subscribe(data=>{
      this.recipeResults = data.body;
//            console.log(this.recipeResults);
      this.searchCompleted.emit("complete");
    });
  }
// TODO: Create s
  public getAllCollections()
  {
    this.apiService.Collection_Collections("false").subscribe(
      data=> {
        this.loading = false;
        this.collectionResults = data.body;
        this.searchCompleted.emit("complete");
//                console.log(this.collectionResults);
      }
    )
  }

  public getRecentRaves() {
    this.apiService.Recipe_Raves(1,3).subscribe(
      data=> {
        this.loading =false;
        this.ravesResults = data.body;
        this.searchCompleted.emit('complete');
                console.log(this.ravesResults);
      }
    )

  }

  public getAllCategories()
  {
    if (this.categories) // if already loaded, don't get anew.
    {
      this.categoriesLoaded.emit("done");
      return;
    }

    this.apiService.Recipe_Categories().subscribe(
      data=> {
        this.categories = data.body;
        this.categoriesLoaded.emit("done");

      }
    )
  }

  public getReviewsForRecipe(recipeId:number, pg:number, rpp:number): Observable<HttpResponse<BigOvenModelAPIReview[]>>
  {
    return this.apiService.Review_GetReviews(recipeId, pg, rpp);
  }

  public getReplies(reviewId:string, pg:number, rpp:number)
  {
    return this.apiService.Review_GetReplies(reviewId, pg, rpp);
  }

  public GetMyRecipeReview(recipeId:number): Observable<HttpResponse<BigOvenModelAPIReview>>
  {
    return this.apiService.Review_GetMyReview(recipeId);
  }

  public addRecipeNote(recipeId:number, note:string)
  {
    var req: API2ControllersNoteControllerNoteRequest = {
      Date: null,
      DateDT: null,
      ID: null,
      Notes: note,
      People: null,
      Variations: null,
      UserID: null,
      RecipeID: recipeId,
      GUID: null,
      CreationDate: null
    }

    return this.apiService.Note_Post(recipeId, req);
  }

  public AddOrUpdateRecipeReview(recipeId:number, rating:number, comment:string): Observable<HttpResponse<SystemObject>>
  {
    var data: API2ControllersReviewControllerReviewRequest = {
      ActiveMinutes: 0,
      Comment: comment,
      MakeAgain: null,
      StarRating: rating,
      TotalMinutes:0
    }

    return this.apiService.Review_Post(recipeId, data);
  }


  public getPublicRecipesByUser(username:string, pg:number, rpp: number, any_kw:string ): Observable<HttpResponse<BigOvenModelAPI2RecipeSearchResult>> {
    return this.apiService.Recipe_RecipeSearch(any_kw, null, null, null, null, null, username, null,
      null, null, null, null, null, null, null, null, null, null, username, null,
      null, null, null, rpp, pg, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

  }

  public recipeAutoComplete(query:string, limit:number)
  {
    return this.apiService.Recipe_AutoComplete(query, limit).pipe(map((res: any) => res.body));
  }

  public recipeAutoCompleteMine(query:string, limit:number)
  {
    return this.apiService.Recipe_AutoComplete_Mine(query, limit).pipe(map((res: any) => res.body));
  }

  public recipeAutoCompleteAll(query:string, limit:number)
  {
    return this.apiService.Recipe_AutoComplete_All(query, limit).pipe(map((res: any) => res.body));
  }

  public sendRecipeToUser(username:string, comment:string, recipeId?:number)
  {
    return this.apiService.Utils_User_Send_Recipe({tousername: username, recipeId: recipeId, comments: comment});
  }

  public getSubcategoriesOfCategoryIndex(mainCategoryIndex:number)
  {
    if (this.categories!=[])
    {
      return (this.categories.filter(x=>x.ParentID==mainCategoryIndex));
    }

  }



}
