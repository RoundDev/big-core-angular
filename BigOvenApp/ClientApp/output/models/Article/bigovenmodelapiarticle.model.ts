export interface CaptionImage {
  PhotoUrl: string,
  Caption: string
}

export interface BigOvenModelAPIArticle {
  CaptionedImages: CaptionImage[],
  Slug: string,
  Id: string,
  ArticleId: number,
  CategoryID: number,
  SubcategoryID: number,
  ShortURL: string,
  InternalAbstract: string,
  AssignedToUserID: number,
  Title: string,
  Subhead: string,
  Byline: string,
  Body: string,
  DeadlineDate: Date,
  ReadyForReview: boolean,
  ApprovedForDisplay: boolean,
  IsSeasonal: boolean,
  SeasonalStartEmphasis: Date,
  SeasonalEndEmphasis: Date,
  AllCategoriesText: string,
  DateCreated: Date,
  DateApproved: Date,
  DateAssigned: Date,
  PrimaryImage: string,
  keywordUnique: string,
  LineOrder: number
}
