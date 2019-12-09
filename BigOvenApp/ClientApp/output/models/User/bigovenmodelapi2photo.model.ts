import { BigOvenModelAPI2UserInfoTinyx } from './bigovenmodelapi2userinfotinyx.model'

export interface BigOvenModelAPI2Photo {
  ImageID: number;
  PhotoUrl: string;
  CreationDate: string;
  IsPrimary: boolean;
  Caption: string;
  MaxImageSquare: number;
  Poster: BigOvenModelAPI2UserInfoTinyx;
}
