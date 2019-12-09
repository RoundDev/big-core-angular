import { BigOvenModelAPI2RecipeInfox, } from './bigovenmodelapi2recipeinfox.model'
import {BigOvenModelAPIRecipe} from './bigovenmodelapirecipe.model'

export interface BigOvenModelAPI2RecipeSearchResult {
  ResultCount: number;
  SpellSuggest: string;
  Results: BigOvenModelAPI2RecipeInfox[];
}
