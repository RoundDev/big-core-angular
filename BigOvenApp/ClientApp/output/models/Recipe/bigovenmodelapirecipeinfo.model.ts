import { BigOvenModelAPIUserInfo } from '../User/bigovenmodelapiuserinfo.model'

export interface BigOvenModelAPIRecipeInfo {
  RecipeID: number;
  Title: string;
  Cuisine: string;
  Category: string;
  Subcategory: string;
  Microcategory: string;
  StarRating: number;
  StarRatingIMG: string;
  WebURL: string;
  ImageURL: string;
  ImageURL120: string;
  ReviewCount: number;
  IsPrivate: boolean;
  HideFromPublicSearch: boolean;
  IsBookmark: boolean;
  BookmarkURL: string;
  YieldNumber: number;
  QualityScore: number;
  CreationDate: string;
  MaxImageSquare: number;
  TotalTries: number;
  HeroPhotoUrl: string;
  Poster: BigOvenModelAPIUserInfo;
}
