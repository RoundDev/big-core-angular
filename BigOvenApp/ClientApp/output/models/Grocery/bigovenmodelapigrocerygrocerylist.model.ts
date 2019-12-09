import { BigOvenModelAPIGroceryItem } from './bigovenmodelapigroceryitem.model'
import {BigOvenModelAPIRecipeInfo} from "../Recipe/bigovenmodelapirecipeinfo.model";


export interface BigOvenModelAPIGroceryGroceryList {
  LastModified: string;
  VersionGuid: string;
  Items: BigOvenModelAPIGroceryItem[];
  Recipes: BigOvenModelAPIRecipeInfo[];
}
