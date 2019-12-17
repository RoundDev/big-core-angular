import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {BigOvenModelAPI2Recipe, BigOvenModelAPIIngredient} from "../../../../../output/models";
import {ActivatedRoute, Router} from "@angular/router";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";
import {GroceryService} from "../../../shared/services/grocery.service";
import {faClock, faCalendar, faUtensils, faClipboard} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-recipe-detail-info-box',
  templateUrl: './recipe-detail-info-box.component.html',
  styleUrls: ['./recipe-detail-info-box.component.scss']
})
export class RecipeDetailInfoBoxComponent implements OnInit {

  @Input()
  recipe: BigOvenModelAPI2Recipe;

  mealModel: string="5";
  public modalRef: BsModalRef;

  public dt: Date = new Date();
  public minDate: Date = void 0;
  public events: any[];
  public tomorrow: Date;
  public afterTomorrow: Date;
  public dateDisabled: {date: Date, mode: string}[];
  public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
    'shortDate'];
  public format: string = this.formats[0];
  public dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };

  // FontAwesome Icons
  faClock = faClock;
  faCalendar = faCalendar;
  faUtensils = faUtensils;
  faClipboard =faClipboard;
  opened: boolean = false;
  isCalendarCollapsed = true;
  groceryIngredients: BigOvenModelAPIIngredient[] =[];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private groceryService: GroceryService,
    private bigovenAuthService: BigOvenAuthService
  ) {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    (this.dateDisabled = []);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];
  }

  ngOnInit() {
    this.groceryIngredients = [];
    console.log(this.recipe.Poster);
  }

  redirectIfNotAuth():boolean
  {
    if (!this.bigovenAuthService.isLoggedIn())
    {
      this.router.navigateByUrl("/account/login?ReturnUrl="+this.route.snapshot.url.join('/'));
      return true;
    }
    return false;
  }

  addToPlanDone()
  {
    alert(this.mealModel);
  }

  public addToGrocery():boolean
  {
    if (this.redirectIfNotAuth()) { return false; }
    this.groceryIngredients = this.recipe.Ingredients.slice();
    return true;
  }

  removeLine(ID)
  {
    this.groceryIngredients = this.groceryIngredients.filter(function( obj ) {
      return obj.IngredientID !== ID;
    });
  }

  dinnerTonight()
  {
    alert("Adding to dinner tonight");
    alert(new Date());
  }
  dinnerTomorrow()
  {
    alert("Adding to dinner tomorrow");
    var result = new Date();
    result.setDate(result.getDate() + 1);
    alert(result);
  }

  addItemsConfirmed()
  {
    // add this.groceryIngredients to grocery list
    console.log("Now add ingredients:");

    console.log(this.groceryIngredients);
    this.groceryService.addLinesToGrocerylist(this.groceryIngredients, this.recipe.RecipeID);

  }

  public openModalIfAuth(template: TemplateRef<any>) {
    if (!this.bigovenAuthService.isLoggedIn())
    {
      this.router.navigateByUrl("/account/login?ReturnUrl=/"+this.route.snapshot.url.join('/'))
      return;
    }
    this.modalRef = this.modalService.show(template);
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public navToPrint()
  {
    let urlPath = (this.recipe.WebURL||"").replace("http://www.bigoven.com","").replace("https://www.bigoven.com","").replace("http://bigoven.com","").replace("https://bigoven.com","");
    this.router.navigateByUrl(urlPath+"/print");
  }

}
