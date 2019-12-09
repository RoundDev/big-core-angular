import { API2ModelsPersonal } from '../Location/api2modelspersonal.model'
import { API2ModelsAccounting } from '../Account/api2modelsaccounting.model'
import { API2ModelsPreference } from './api2modelspreference.model'
import { API2ModelsProfile } from './api2modelsprofile.model'

export interface API2ModelsBigOvenUser {
  BOAuthToken: string;
  LastChangeLogID: string;
  Personal: API2ModelsPersonal;
  Accounting: API2ModelsAccounting;
  Preferences: API2ModelsPreference;
  Profile: API2ModelsProfile;
}
