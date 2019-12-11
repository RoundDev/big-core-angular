import {Component, Input, OnInit} from '@angular/core';
import {
  BigOvenModelAPI2Photo,
  BigOvenModelAPI2Recipe,
  BigOvenModelAPIIngredient,
  BigOvenModelAPIRecipeNote
} from "../../../../../output/models";
import {ActivatedRoute, Router} from "@angular/router";
import {UrlpathPipe} from "../../../shared/pipes/urlpath.pipe";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";
import {RecipeSearchService} from "../../../shared/services/recipeSearch.service";
import {UserService} from "../../../shared/services/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recipe-detail-tabs',
  templateUrl: './recipe-detail-tabs.component.html',
  styleUrls: ['./recipe-detail-tabs.component.scss']
})
export class RecipeDetailTabsComponent implements OnInit {

  @Input() recipe: BigOvenModelAPI2Recipe;

  @Input() resizedTo: number;
  @Input() metric: boolean = false;

  theHtmlString: string;

  notes: BigOvenModelAPIRecipeNote[] = [];
  noteCount: string = "";

  photos: BigOvenModelAPI2Photo[] = [];
  photosCount: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private urlpathPipe: UrlpathPipe,
    private userService: UserService,
    public bigovenAuthService: BigOvenAuthService,
    private recipeSearchService: RecipeSearchService
  ) { }

  ngOnInit() {
    if (this.bigovenAuthService.isLoggedIn())
    {
      if (this.bigovenAuthService.isPro())
      {
        this.loadNotes();
      }
    }
    this.loadPhotos();
  }

  loadPhotos()
  {
    this.recipeSearchService.getRecipePhotos(this.recipe.RecipeID, 1, 6).subscribe(data=>{
      this.photos = data.body.Results;
      if (data.body.ResultCount>0)
      {
        this.photosCount = "("+ data.body.ResultCount.toString() +")";
      }
      console.log(this.photos);
    });
  }

  loadNotes()
  {
    this.userService.getNotesByUserRecipe(this.recipe.RecipeID, 1, 100).subscribe(data=>{
      this.notes = data.body.Results;
      console.log(this.notes);
      if (data.body.ResultCount>0)
      {
        this.noteCount = "(" + data.body.ResultCount.toString() + ")";
      }
    });
  }

  onSubmitAddNote(form:NgForm)
  {
    this.recipeSearchService.addRecipeNote(this.recipe.RecipeID, form.value.note).subscribe(data=>{

    });
  }

  onDataClick(event: Event, ingredient: BigOvenModelAPIIngredient)
  {
    let url = this.extractUrlFromIngredient(ingredient.HTMLName);
    this.router.navigateByUrl(url);
    return;
  }

  extractUrlFromIngredient(str): string
  {
    if (str==null) {return "";}
    let result = "";
    let rx = /dl=\"([^\'\"]+)/g;
    var arr = rx.exec(str);
    console.log(arr);
    if (arr!=null)
    {
      if (arr.length>=2)
      {
        return arr[1].replace("https://www.bigoven.com","").replace("http://www.bigoven.com","").replace("-"," ");
      } else
      {
        return null;
      }
    } return "";
  }

}
