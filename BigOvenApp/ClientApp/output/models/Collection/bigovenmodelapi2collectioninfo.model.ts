import { BigOvenModelAPI2RecipeInfox } from '../Recipe/bigovenmodelapi2recipeinfox.model'

export interface BigOvenModelAPI2CollectionInfo {
  ID: number;
  Description: string;
  Title: string;
  MobileUrl: string;
  PhotoUrl: string;
  PRO: boolean;
  IsFiltered: boolean;
  Token: string;
  WebUrl: string;
  IsSponsored: boolean;
  Results: BigOvenModelAPI2RecipeInfox[];
}
