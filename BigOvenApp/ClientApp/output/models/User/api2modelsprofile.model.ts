import { API2ModelsCounts } from './api2modelscounts.model'

export interface API2ModelsProfile {
  FullName: string;
  AboutMe: string;
  FirstName: string;
  LastName: string;
  UserID: number;
  HomeUrl: string;
  PhotoUrl: string;
  BackgroundUrl: string;
  UserName: string;
  Counts: API2ModelsCounts;
}
