import { BigOvenModelAPIPlannerRecipe } from './bigovenmodelapiplannerrecipe.model'
import { BigOvenModelAPIPlannerNote } from './bigovenmodelapiplannernote.model'
import { BigOvenModelAPI2RecipeInfox } from './bigovenmodelapi2recipeinfox.model'

export interface BigOvenModelAPI2PlannerMealPlan {
  Recipes: BigOvenModelAPIPlannerRecipe[];
  Notes: BigOvenModelAPIPlannerNote[];
  RecipeObjects: BigOvenModelAPI2RecipeInfox[];
}
