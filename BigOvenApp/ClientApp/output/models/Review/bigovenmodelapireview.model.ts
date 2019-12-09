import { BigOvenModelAPIUserInfo } from './bigovenmodelapiuserinfo.model'
import { BigOvenModelAPIReview } from './bigovenmodelapireview.model'
import { BigOvenModelAPIReply } from './bigovenmodelapireply.model'

export interface BigOvenModelAPIReview {
  ID: string;
  ReviewID: number;
  GUID: string;
  Comment: string;
  StarRating: number;
  TotalMinutes: number;
  ActiveMinutes: number;
  CreationDate: string;
  ParentID: number;
  ReplyCount: number;
  LastModified: string;
  Poster: BigOvenModelAPIUserInfo;
  Replies: BigOvenModelAPIReview[];
  FeaturedReply: BigOvenModelAPIReply;
}
