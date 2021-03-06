import { BigOvenModelAPI2PlannerSavedMenuLine } from './bigovenmodelapi2plannersavedmenuline.model'
import { BigOvenModelAPI2RecipeInfox } from '../Recipe/bigovenmodelapi2recipeinfox.model'
import { BigOvenModelAPIUserInfo } from '../User/bigovenmodelapiuserinfo.model'

export interface BigOvenModelAPI2PlannerSavedMenu {
  SubmittedByUserID: number;
  DateCreated: string;
  Title: string;
  Description: string;
  January: boolean;
  February: boolean;
  March: boolean;
  April: boolean;
  May: boolean;
  June: boolean;
  July: boolean;
  August: boolean;
  September: boolean;
  October: boolean;
  November: boolean;
  December: boolean;
  PrimaryImage: string;
  AllCategoriesText: string;
  IsPrivate: boolean;
  Cuisine: string;
  PrimaryIngredient: string;
  ActiveMinutes: number;
  TotalMinutes: number;
  SuggestedBeverages: string;
  MenuCategory: number;
  MenuPrimaryCategory: number;
  ID: number;
  Days: number;
  Meals: number;
  MenuImageAwaitsConstruction: boolean;
  MenuImageURL: string;
  WebURL: string;
  TasteRating: number;
  Detail: string;
  IsPro: boolean;
  MenuLines: BigOvenModelAPI2PlannerSavedMenuLine[];
  RecipeObjects: BigOvenModelAPI2RecipeInfox[];
  Poster: BigOvenModelAPIUserInfo;
}
