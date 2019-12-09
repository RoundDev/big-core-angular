
export interface BigOvenModelAPIUser {
  UserID: number;
  UserName: string;
  ImageURL: string;
  ImageURL48: string;
  ImageURL64: string;
  ImageURL128: string;
  PhotoUrl: string;
  BackgroundUrl: string;
  HomeUrl: string;
  IsPremium: boolean;
  CreditBalance: number;
  FullName: string;
  FirstName: string;
  LastName: string;
  MemberSince: string;
  AboutMe: string;
  TrySoonCount: number;
  FavoritesCount: number;
  AddedCount: number;
  MenusCount: number;
  PremiumExpiryDate: string;
  OwnsDomain: string;
  IsGroceryListFree: boolean;
  IsMenuPlanFree: boolean;
  GroceryListSponsor: string;
  MenuPlanSponsor: string;
  FBNotifyRecipeRaves: boolean;
  FBNotifyPhotoApproved: boolean;
  FBNotifyRecipePost: boolean;
  FBNotifyMeWhenFriendsJoin: boolean;
  FBNotifyIveFavorited: boolean;
  FBNotifyIveTrySooned: boolean;
  FBNotifyMenuSaved: boolean;
  FBNotifyIveReviewed: boolean;
  FBNotifyAddedMenu: boolean;
  FBNotifyReviewReceived: boolean;
  FBNotifyMedalReceived: boolean;
  FBNotifyIveMade: boolean;
  FacebookID: string;
  OfflineAccessToken: string;
  AdFreeEnabled: boolean;
  PowerFeaturesEnabled: boolean;
  IsCurator: boolean;
  AmFollowing: boolean;
  FollowingCount: number;
  FollowersCount: number;
  BOAuthToken: string;
  UserLevel: string;
  PrivateRecipeCount: number;
  PublicRecipeCount: number;
  TotalRecipes: number;
  LastChangeLogID: string;
  UserType: number;
  FriendlyName: string;
  EatingStyle: string;
  Email: string;
}
