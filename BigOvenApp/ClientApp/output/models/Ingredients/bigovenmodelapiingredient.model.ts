import { BigOvenModelAPIIngredientInfo } from './bigovenmodelapiingredientinfo.model'

export interface BigOvenModelAPIIngredient {
  IngredientID: number;
  DisplayIndex: number;
  IsHeading: boolean;
  Name: string;
  HTMLName: string;
  Quantity: number;
  DisplayQuantity: string;
  Unit: string;
  MetricQuantity: number;
  MetricDisplayQuantity: string;
  MetricUnit: string;
  PreparationNotes: string;
  IsLinked: boolean;
  IngredientInfo: BigOvenModelAPIIngredientInfo;
}
