
export interface BigOvenModelShoppingListLine {
  ShoppingListLineID: number;
  GUID: string;
  TextAmt: string;
  ItemName: string;
  Dept: string;
  HTMLItemName: string;
  DateAdded: string;
  Notes: string;
  ListID: number;
  RecipeID: number;
  PendingAddition: boolean;
  IsChecked: boolean;
  LastModified: string;
  MealPlanObjectType: number;
  MealPlanID: number;
  Store: string;
  ThirdPartyURL: string;
  ThirdPartyHost: string;
  ThirdPartyTitle: string;
}
