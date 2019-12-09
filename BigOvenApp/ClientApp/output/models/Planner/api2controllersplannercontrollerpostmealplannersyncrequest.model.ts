import { BigOvenModelAPIPlannerMealPlan } from './bigovenmodelapiplannermealplan.model'

export interface API2ControllersPlannerControllerPostMealPlannerSyncRequest {
  startDate: string;
  endDate: string;
  plan: BigOvenModelAPIPlannerMealPlan;
}
