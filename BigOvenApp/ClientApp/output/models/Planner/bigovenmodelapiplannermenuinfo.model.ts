import { BigOvenModelAPIUserInfo } from './bigovenmodelapiuserinfo.model'

export interface BigOvenModelAPIPlannerMenuInfo {
  DateCreated: string;
  Title: string;
  Description: string;
  PrimaryImage: string;
  AllCategoriesText: string;
  IsPrivate: boolean;
  ActiveMinutes: number;
  TotalMinutes: number;
  MenuCategory: number;
  MenuPrimaryCategory: number;
  ID: number;
  Days: number;
  Meals: number;
  TasteRating: number;
  MenuImageAwaitsConstruction: boolean;
  MenuImageURL: string;
  WebURL: string;
  RecipeImageURLs: string[];
  IsPro: boolean;
  Poster: BigOvenModelAPIUserInfo;
}
