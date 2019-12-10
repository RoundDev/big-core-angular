import { BigOvenModelAPIUserInfo } from '../User/bigovenmodelapiuserinfo.model'

export interface BigOvenModelAPIPlannerMenuReview {
  MenuID: number;
  GUID: string;
  Comment: string;
  StarRating: number;
  TotalMinutes: number;
  ActiveMinutes: number;
  CreationDate: string;
  Poster: BigOvenModelAPIUserInfo;
}
