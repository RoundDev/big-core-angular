import { BigOvenUserLocator } from './bigovenuserlocator.model'
import { BigOvenLoggerStreamComment } from './bigovenloggerstreamcomment.model'

export interface BigOvenLoggerStreamComment {
  _id: string;
  date: string;
  text: string;
  recipeIds: number[];
  user: BigOvenUserLocator;
  replies: BigOvenLoggerStreamComment[];
  mentions: BigOvenUserLocator[];
}
