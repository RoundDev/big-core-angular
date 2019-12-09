import { BigOvenModelAPIGroceryItem } from './bigovenmodelapigroceryitem.model'
import { BigOvenModelAPI2RecipeInfox } from './bigovenmodelapi2recipeinfox.model'

export interface BigOvenModelAPI2GroceryList {
  LastModified: string;
  VersionGuid: string;
  Items: BigOvenModelAPIGroceryItem[];
  Recipes: BigOvenModelAPI2RecipeInfox[];
}
