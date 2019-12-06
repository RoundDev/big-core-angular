import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  // collectionResults: BigOvenModelAPI2CollectionInfo[];
  // ravesResults: BigOvenModelRecipeInfoReviewTuple2[];
  subscription: any;
  title: string =
    'BigOven';

  // public mynum: number = 2.4;

  backgroundImageStyle: any;
  backgroundImageUrl: string = "";

  // Use "constructor"s only for dependency injection
  constructor(
    // public translate: TranslateService,
    // private recipeSearchService: RecipeSearchService,
    private sanitizer: DomSanitizer
  ) {
    // this.ideasSubscription();
    // this.ravesSubscription();
    var randomInt = Math.floor(Math.random() * 3) + 1;
    let randomImageStr = "/assets/images/hero-img/" + randomInt.toString() + ".svg";

    this.backgroundImageStyle=this.sanitizer.bypassSecurityTrustStyle('url("' + randomImageStr + '")');
  }

  // Here you want to handle anything with @Input()'s @Output()'s
  // Data retrieval / etc - this is when the Component is "ready" and wired up
  ngOnInit() {

    // this.recipeSearchService.getAllCollections();
    // this.recipeSearchService.getRecentRaves();

    // var Fraction = require('fractional').Fraction;
    // console.log((new Fraction(1.5)).toString());
    // console.log((new Fraction(7,3)).multiply(new Fraction(1,2)).toString());
  }

  ideasSubscription()
  {
    // this.subscription = this.recipeSearchService.getSearchCompletedEmitter()
    //   .subscribe(status => this.onSearchCompleted(status));
  }

  ravesSubscription()
  {
    // this.subscription = this.recipeSearchService.getSearchCompletedEmitter()
    //   .subscribe(status => this.onRavesSearchCompleted(status));
  }

  onSearchCompleted(status)
  {
    // this.collectionResults = this.recipeSearchService.collectionResults;
    // var collection = this.collectionResults[Math.floor(Math.random()* this.collectionResults.length)]

  }
  // Raves results
  onRavesSearchCompleted(status)
  {
    // this.ravesResults = this.recipeSearchService.ravesResults;
  }

  public setLanguage(lang) {
    // this.translate.use(lang);
  }

}
