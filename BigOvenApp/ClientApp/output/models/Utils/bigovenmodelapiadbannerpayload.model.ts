
export interface BigOvenModelAPIAdBannerPayload {
  Body: string;
  GUID: string;
  CampaignID: number;
  StartDate: string;
  EndDate: string;
  AdMediaFormat: number;
  DailyImpressionCap: number;
  Type: string;
  PrimaryImageURL: string;
  PrimaryImageURLLandscape: string;
  TargetURL: string;
  TrackingURL: string;
  ClickTrackerURL: string;
  OnClickUrl: string;
  BeforeClickUrl: string;
  BeforeImpressionUrl: string;
  OnImpressionUrl: string;
}
