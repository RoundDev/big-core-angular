import { BigOvenModelAPIUserInfo } from './bigovenmodelapiuserinfo.model'
import { BigOvenModelAPIIngredient } from './bigovenmodelapiingredient.model'
import { BigOvenModelAPINutritionInfo } from './bigovenmodelapinutritioninfo.model'

export interface BigOvenModelAPIRecipe {
  RecipeID: number;
  Title: string;
  Description: string;
  Cuisine: string;
  Category: string;
  Subcategory: string;
  Microcategory: string;
  PrimaryIngredient: string;
  StarRating: number;
  WebURL: string;
  ImageURL: string;
  ReviewCount: number;
  MedalCount: number;
  FavoriteCount: number;
  Instructions: string;
  YieldNumber: number;
  YieldUnit: string;
  TotalMinutes: number;
  ActiveMinutes: number;
  IsPrivate: boolean;
  CreationDate: string;
  LastModified: string;
  IsBookmark: boolean;
  BookmarkURL: string;
  BookmarkSiteLogo: string;
  BookmarkImageURL: string;
  IsRecipeScan: boolean;
  MenuCount: number;
  NotesCount: number;
  AdTags: string;
  IngredientsTextBlock: string;
  AllCategoriesText: string;
  IsSponsored: boolean;
  VariantOfRecipeID: number;
  Collection: string;
  CollectionID: number;
  AdminBoost: number;
  VerifiedDateTime: string;
  MaxImageSquare: number;
  ImageSquares: number[];
  HeroPhotoUrl: string;
  VerifiedByClass: string;
  Poster: BigOvenModelAPIUserInfo;
  Ingredients: BigOvenModelAPIIngredient[];
  NutritionInfo: BigOvenModelAPINutritionInfo;
}
