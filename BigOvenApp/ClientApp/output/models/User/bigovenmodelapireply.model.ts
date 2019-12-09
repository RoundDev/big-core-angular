import { BigOvenModelAPIUserInfoTiny } from './bigovenmodelapiuserinfotiny.model'

export interface BigOvenModelAPIReply {
  ID: string;
  ReviewID: string;
  Comment: string;
  CreationDate: string;
  LastModified: string;
  Poster: BigOvenModelAPIUserInfoTiny;
}
