import {Component, Input, OnInit} from '@angular/core';
import {BigOvenModelAPI2RecipeInfox} from "../../../../../output/models";

@Component({
  selector: 'app-recipe-infobox',
  templateUrl: './recipe-infobox.component.html',
  styleUrls: ['./recipe-infobox.component.scss']
})
export class RecipeInfoboxComponent implements OnInit {

  @Input()
  recipe: BigOvenModelAPI2RecipeInfox;

  constructor() { }

  ngOnInit() {
  }

}
