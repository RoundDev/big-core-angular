import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BigOvenModelAPIIngredient} from "../../../../../output/models";
import {GlobalVars} from "../../../shared/globalvars";

@Component({
  selector: 'app-recipe-ingredient-line-editor',
  templateUrl: './recipe-ingredient-line-editor.component.html',
  styleUrls: ['./recipe-ingredient-line-editor.component.scss']
})
export class RecipeIngredientLineEditorComponent implements OnInit {

  @Input()
  ingredientLine: BigOvenModelAPIIngredient;
  @Input()
  index: number;
  @Output()
  ingredientLineChange: EventEmitter<BigOvenModelAPIIngredient> = new EventEmitter<BigOvenModelAPIIngredient>();
  @Output()
  remove: EventEmitter<BigOvenModelAPIIngredient> = new EventEmitter<BigOvenModelAPIIngredient>();
  @Output()
  addBefore: EventEmitter<BigOvenModelAPIIngredient> = new EventEmitter<BigOvenModelAPIIngredient>();

  selectedMeasure: string;
  measures = this.globalVars.bo_global_known_measures;
  selectedName: string;
  ingredients = this.globalVars.bo_global_ingredients_edible_only;


  constructor(private globalVars: GlobalVars) {
  }

  ngOnInit() {
  }

  addBeforeLine() {
    this.addBefore.emit(this.ingredientLine);
  }

  removeLine() {
    this.remove.emit(this.ingredientLine);
  }

}
