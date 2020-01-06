import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BigOvenModelAPIIngredient} from "../../../../../output/models";

@Component({
  selector: 'app-recipe-ingredient-list',
  templateUrl: './recipe-ingredient-list.component.html',
  styleUrls: ['./recipe-ingredient-list.component.scss']
})
export class RecipeIngredientListComponent implements OnInit {

  @Input()
  ingredientLines: BigOvenModelAPIIngredient[];
  @Output()
  ingredientLinesChange: EventEmitter<BigOvenModelAPIIngredient[]> = new EventEmitter<BigOvenModelAPIIngredient[]>();

  constructor() {
    console.log("ingredientLines");
    console.log(this.ingredientLines);
  }

  ngOnInit() {
  }

  appendLine() {
    const ingLine: BigOvenModelAPIIngredient = {
      IngredientID: -1,
      DisplayIndex: this.ingredientLines.length,
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
    this.ingredientLinesChange.emit(this.ingredientLines);
  }

  addBeforeLine(event, index) {
    console.log("Addafterline");
    console.log(index);

    const ingLine: BigOvenModelAPIIngredient = {
      IngredientID: -1,
      DisplayIndex: this.ingredientLines.length,
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

    this.ingredientLines.splice(index, 0, ingLine);
    this.ingredientLinesChange.emit(this.ingredientLines);
  }

  removeLine(event, index) {
    this.ingredientLines = this.ingredientLines.filter(obj => obj.DisplayIndex !== event.DisplayIndex);

    let i = 0;
    this.ingredientLines.forEach(data => {
      data.DisplayIndex = i;
      i++;
    });
    this.ingredientLinesChange.emit(this.ingredientLines);

    console.log(this.ingredientLines);
  }

}
