import { BigOvenModelAPI2UserInfoTinyx } from '../User/bigovenmodelapi2userinfotinyx.model'

export interface BigOvenModelAPI2RecipeInfox {
  RecipeID: number;
  Title: string;
  Cuisine: string;
  Category: string;
  Subcategory: string;
  Microcategory: string;
  StarRating: number;
  WebURL: string;
  ReviewCount: number;
  IsPrivate: boolean;
  Servings: number;
  CreationDate: string;
  IsRecipeScan: boolean;
  IsBookmark: boolean;
  TotalTries: number;
  PhotoUrl: string;
  Poster: BigOvenModelAPI2UserInfoTinyx;
}
