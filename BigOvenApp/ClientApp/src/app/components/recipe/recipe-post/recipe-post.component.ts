import {Component, OnInit} from '@angular/core';
import {BigOvenModelAPIIngredient} from "../../../../../output/models";
import {GlobalVars} from '../../../shared/globalvars';
import {NgForm} from "@angular/forms";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";
import {faAlignJustify, faCopy, faImage, faPaperclip, faQuestionCircle, faLightbulb} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-recipe-post',
  templateUrl: './recipe-post.component.html',
  styleUrls: ['./recipe-post.component.scss']
})
export class RecipePostComponent implements OnInit {

  ingredientLines: BigOvenModelAPIIngredient[] = [];
  mainIngredients = this.globalVars.bo_global_ingredients_edible_only;
  mainIngredient: string;
  cuisines = this.globalVars.bo_global_cuisines;
  cuisine: string;
  isAdmin: boolean = false;
  selectedMainIngredient: string;

  faAlignJustify = faAlignJustify;
  faCopy = faCopy;
  faImage = faImage;
  faPaperclip = faPaperclip;
  faQuestionCircle = faQuestionCircle;
  faLightbulb = faLightbulb;

  constructor(private globalVars: GlobalVars, public bigovenAuthService: BigOvenAuthService) {
    this.isAdmin = this.bigovenAuthService.isAdmin();
    this.initializeBlankIngredients();
    console.log("in recipepost");
    console.log(this.ingredientLines);
  }

  onSubmitBookmark(form: NgForm) {
    var url = form.value.url;
    console.log(url);

  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log("Ingredientlines are:");
    console.log(this.ingredientLines);


  }

  ngOnInit() {

  }

  initializeBlankIngredients() {
    for (let i = 0; i < 7; i++) {
      const ingLine: BigOvenModelAPIIngredient = {
        IngredientID: -1,
        DisplayIndex: i,
        IsHeading: false,
        Name: "",
        HTMLName: "",
        Quantity: 0,
        DisplayQuantity: "",
        Unit: "",
        MetricQuantity: 0,
        MetricDisplayQuantity: "",
        MetricUnit: "",
        PreparationNotes: "",
        IsLinked: false,
        IngredientInfo: null
      };
      this.ingredientLines.push(ingLine);
    }
  }

}
