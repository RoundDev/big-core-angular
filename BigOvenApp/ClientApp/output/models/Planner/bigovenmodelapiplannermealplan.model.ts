import { BigOvenModelAPIPlannerRecipe } from './bigovenmodelapiplannerrecipe.model'
import { BigOvenModelAPIPlannerNote } from './bigovenmodelapiplannernote.model'
import { BigOvenModelAPIRecipeInfo } from './bigovenmodelapirecipeinfo.model'

export interface BigOvenModelAPIPlannerMealPlan {
  Recipes: BigOvenModelAPIPlannerRecipe[];
  Notes: BigOvenModelAPIPlannerNote[];
  RecipeObjects: BigOvenModelAPIRecipeInfo[];
}
