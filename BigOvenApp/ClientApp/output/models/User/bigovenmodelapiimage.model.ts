import { BigOvenModelAPIUserInfo } from './bigovenmodelapiuserinfo.model'

export interface BigOvenModelAPIImage {
  ImageID: number;
  ImageURL: string;
  ImageURL48: string;
  ImageURL64: string;
  ImageURL120: string;
  ImageURL128: string;
  ImageURL200: string;
  ImageURL256: string;
  CreationDate: string;
  IsPrimary: boolean;
  Caption: string;
  MaxImageSquare: number;
  ImageSquares: number[];
  Poster: BigOvenModelAPIUserInfo;
}
