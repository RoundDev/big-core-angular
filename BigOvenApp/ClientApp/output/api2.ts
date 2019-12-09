import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import {Observable} from "rxjs";

import { BigOvenModelAPI2RecipeSearchResult, BigOvenModelAPI2RecipeInfox, BigOvenModelAPI2UserInfoTinyx, BigOvenModelAPI2CollectionInfo, BigOvenModelAPI2FolderProperty, API2Result, SystemObject, API2ControllersFolderControllerAddToFolderReq, API2ControllersFolderControllerPostFolderReq, API2ControllersFolderControllerFolderNameRecipesRequest, API2ControllersFolderControllerRenameFolderRequest, API2ControllersGroceryListControllerDepartmentModel, API2GroceryListDepartmentResult, BigOvenModelAPI2GroceryList, BigOvenModelAPIGroceryItem, API2ControllersGroceryListControllerPostGroceryListRecipeRequest, API2ControllersGroceryListControllerPostGroceryListAddLineRequest, BigOvenModelShoppingListLine, API2ControllersGroceryListControllerPostToGroceryListRecipeRequest, API2ControllersGroceryListControllerPostGroceryListSyncRequest, BigOvenModelAPIGroceryGroceryList, BigOvenModelAPIRecipeInfo, BigOvenModelAPIUserInfo, API2ControllersGroceryListControllerUpdateItemByGuidRequest, BigOvenModelAPIImage, API2ControllersImagesControllerRecipePhotosResponse, BigOvenModelAPI2Photo, API2ModelsBigOvenUser, API2ModelsPersonal, API2ModelsAccounting, API2ModelsPreference, API2ModelsProfile, API2ModelsLocation, API2ModelsCounts, API2ControllersMeControllerPreferenceOptions, API2ControllersMeControllerEatingStyle, API2ControllersMeControllerOption, API2ControllersMenuControllerAddToGroceryRequest, BigOvenModelAPI2PlannerSavedMenu, BigOvenModelAPI2PlannerSavedMenuLine, BigOvenModelAPIMenuSearchResult, BigOvenModelAPIPlannerMenuInfo, BigOvenModelAPIPlannerMealPlan, BigOvenModelAPIPlannerRecipe, BigOvenModelAPIPlannerNote, BigOvenModelAPIPlannerSavedMenu, BigOvenModelAPIPlannerSavedMenuLine, BigOvenModelAPIPlannerMenuReview, API2ControllersMenuControllerAddToPlanRequest, BigOvenModelAPIRecipeNote, API2ControllersNoteControllerNoteRequest, BigOvenModelAPIRecipeNoteList, BigOvenModelAPI2RecipeNote, API2ControllersPlannerControllerPostMealPlannerSyncRequest, BigOvenModelAPI2PlannerMealPlan, API2ControllersPrivateControllerRecipeLongViewSignalReq, API2ModelsStartupMessageResponse, BigOvenModelTip, API2ControllersPrivateControllerCategoriesRootObject, API2ControllersPrivateControllerLogReq, BigOvenModelLogEntry, API2ControllersPrivateControllerPremiumPurchaseIOSRequest, API2ControllersPrivateControllerPremiumPurchaseAndroidRequest, API2ControllersPrivateControllerPremiumPurchaseAndroidSubscriptionRequest, BigOvenModelAPIUser, API2ControllersPrivateControllerPostPremiumPurchaseWindowsRequest, API2ControllersPrivateControllerPremiumPurchaseAndroidRequestNew, BigOvenModelAPIAdBannerPayload, BigOvenModelAPI2Configuration, API2ControllersPrivateControllerNotifyRegisterRequest, BigOvenModelRecipeInfoReviewTuple2, BigOvenModelAPIReview, BigOvenModelAPIReply, BigOvenModelAPIUserInfoTiny, BigOvenModelAPI2Recipe, BigOvenModelAPIIngredient, BigOvenModelAPINutritionInfo, BigOvenModelAPIIngredientInfo, API2ControllersRecipeControllerFeedbackDTO, BigOvenModelAPIRecipe, API2ControllersRecipeControllerRecipeSendRequest, BigOvenModelRecipeCategory, API2ControllersRecipeControllerBookmarkRecipeRequest, API2ControllersRecipeControllerRecipeMobileShareRequest, BigOvenModelRecipeInfoDateTuple2, API2ControllersReviewControllerReviewRequestLegacy, API2ControllersReviewControllerReviewRequest, API2ControllersReviewControllerPostReplyReq, BigOvenModelAPI2Tile, API2ControllersSocialControllerInboxSeenRequest, BigOvenModelAPI2InboxNotification, BigOvenLoggerActivityLogEntry, BigOvenLoggerStreamComment, BigOvenUserLocator, API2ControllersSocialControllerActivityCommentReplyRequest, API2ControllersUserControllerPopulateViaFBRequest, API2ControllersUserControllerInviteHouseholdReq, API2ControllersUserControllerHouseholdMember, BigOvenModelAPI2UserInfoTinyWithEmail, API2ControllersUserControllerRevokeHouseholdMemberReq, API2ControllersUserControllerWithdrawFromHouseholdReq, API2ControllersUserControllerFollowAddReq, BigOvenModelAPIUserInfoGroup, API2ControllersUserControllerExchangeBasicAuthForTokenRequest, API2ControllersUserControllerProfilePostRequest, API2ControllersUserControllerProfilePutRequest, API2ControllersUserControllerPreferencesReq, API2ControllersUserControllerUserForgotReq, API2ControllersUserControllerPostFacebookInfoRequest, API2ControllersUtilsControllerOAuth2Request, API2ControllersUtilsControllerOAuth2RequestPut, API2ControllersUtilsControllerOAuth2GoogleTokenInfoReq, BigOvenModelAPIChangeLogEvent, API2ControllersUtilsControllerOauth2FBReq, API2ControllersUtilsControllerOauth2PutFBReq } from './models';
import { CookieService } from 'ngx-cookie-service';
import { API2ControllersUtilsUpdatePassword } from './models/Utils/API2ControllersUtilsUpdatePassword.model';
import { API2BigOvenRecipeInfoTiny } from './models/Recipe/api2bigovenrecipeinfotiny';
import { API2SendRecipeReq } from './models/Recipe/api2sendrecipereq';
//import { UserService } from '../app/shared/user.service';

/**
 * Created with angular4-swagger-client-generator.
 */
@Injectable()
export class ApiClientService {

    //private domain = 'http://localhost:8004';
    private domain = 'https://ap2bigoven-shadow.azurewebsites.net/';

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
        @Optional() @Inject('domain') domain: string

    ) {
        if (domain) {
            this.domain = domain;
        }
    }

    /**
     * Method Collection_GetCollection
     * @param id The the collection identifier
     * @param rpp The results per page
     * @param pg The page number (starting with 1)
     * @param test The Internal API
     * @param sessionForLogging The Internal API
     * @return The full HTTP response as Observable
     */
    // TODO: Use this call to get recipe ideas on home page
    public Collection_GetCollection(id: number, rpp: number, pg: number, test: boolean, sessionForLogging: string): Observable<HttpResponse<BigOvenModelAPI2RecipeSearchResult>> {
        let uri = `/collection/${id}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (test) {
            params = params.set('test', test + '');
        }
        if (sessionForLogging) {
            params = params.set('sessionForLogging', sessionForLogging + '');
        }
        return this.sendRequest<BigOvenModelAPI2RecipeSearchResult>('get', uri, headers, params, null);
    }

    /**
     * Method Collection_GetCollectionMeta
     * @param id The the collection identifier
     * @return The full HTTP response as Observable
     */
    public Collection_GetCollectionMeta(id: number): Observable<HttpResponse<BigOvenModelAPI2CollectionInfo>> {
        let uri = `/collection/${id}/meta`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2CollectionInfo>('get', uri, headers, params, null);
    }

    /**
     * Method Collection_Collections
     * @param test The Internal API
     * @return The full HTTP response as Observable
     test: string */
    public Collection_Collections(test: string): Observable<HttpResponse<BigOvenModelAPI2CollectionInfo[]>> {
        let uri = `/collections`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (test) {
            params = params.set('test', test + '');
        }
        return this.sendRequest<BigOvenModelAPI2CollectionInfo[]>('get', uri, headers, params, null);
    }

    /**
     * Method Folder_GetFolders
     * @param pg The Internal API
     * @param rpp The Internal API
     * @return The full HTTP response as Observable
     */
    public Folder_GetFolders(pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPI2FolderProperty[]>> {
        let uri = `/folders`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPI2FolderProperty[]>('get', uri, headers, params, null);
    }

    /**
     * Method Folder_Get
     * @param name The
     * @return The full HTTP response as Observable
     */
    public Folder_Get(name: string): Observable<HttpResponse<BigOvenModelAPI2FolderProperty>> {
        let uri = `/folder/${name}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2FolderProperty>('get', uri, headers, params, null);
    }

    /**
     * Method Folder_GetById
     * @param id The Internal API
     * @return The full HTTP response as Observable
     */
    public Folder_GetById(id: string): Observable<HttpResponse<BigOvenModelAPI2FolderProperty>> {
        let uri = `/folder/id/${id}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2FolderProperty>('get', uri, headers, params, null);
    }

    /**
     * Method Folder_Recipes
     * @param folderName The
     * @param folderId The
     * @param userId The
     * @param pg The
     * @param rpp The
     * @return The full HTTP response as Observable
     */
    public Folder_Recipes(folderName: string, folderId: string, userId: number, pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPI2RecipeSearchResult>> {
        let uri = `/folder/recipes`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (folderName) {
            params = params.set('folderName', folderName + '');
        }
        if (folderId) {
            params = params.set('folderId', folderId + '');
        }
        if (userId) {
            params = params.set('userId', userId + '');
        }
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPI2RecipeSearchResult>('get', uri, headers, params, null);
    }

    /**
     * Method Folder_AddRecipe
     * @param folderName The Case-sensitive folder name. Reserved names are Made, Try, Favorites and Added
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Folder_AddRecipe(folderName: string, data: API2ControllersFolderControllerAddToFolderReq): Observable<HttpResponse<API2Result>> {
        let uri = `/folder/${folderName}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2Result>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Folder_Delete
     * @param folderName The
     * @return The full HTTP response as Observable
     */
    public Folder_Delete(folderName: string): Observable<HttpResponse<API2Result>> {
        let uri = `/folder/${folderName}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2Result>('delete', uri, headers, params, null);
    }

    /**
     * Method Folder_Post
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Folder_Post(data: API2ControllersFolderControllerPostFolderReq): Observable<HttpResponse<SystemObject>> {
        let uri = `/folder`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Folder_DeleteRecipe
     * @param recipeId The
     * @param folderName The Case-sensitive folder name. Reserved names are Made, Try, Favorites and Added
     * @return The full HTTP response as Observable
     */
    public Folder_DeleteRecipe(recipeId: number, folderName: string): Observable<HttpResponse<API2Result>> {
        let uri = `/folder/${folderName}/recipe/${recipeId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2Result>('delete', uri, headers, params, null);
    }

    /**
     * Method Folder_AddRecipes
     * @param folderName The Name (case sensitive) of folder
     * @param data The list of recipeIds
     * @return The full HTTP response as Observable
     */
    public Folder_AddRecipes(folderName: string, data: API2ControllersFolderControllerFolderNameRecipesRequest): Observable<HttpResponse<API2Result>> {
        let uri = `/folder/${folderName}/recipes`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2Result>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Folder_DeleteRecipes
     * @param folderName The Name (case sensitive) of folder
     * @param data The list of recipeIds
     * @return The full HTTP response as Observable
     */
    public Folder_DeleteRecipes(folderName: string, data: API2ControllersFolderControllerFolderNameRecipesRequest): Observable<HttpResponse<API2Result>> {
        let uri = `/folder/${folderName}/recipes`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2Result>('delete', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Folder_Rename
     * @param oldFolderName The string (case-sensitive)
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Folder_Rename(oldFolderName: string, req: API2ControllersFolderControllerRenameFolderRequest): Observable<HttpResponse<API2Result>> {
        let uri = `/folder/${oldFolderName}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2Result>('put', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Folder_FoldersForRecipe
     * @param recipeId The
     * @return The full HTTP response as Observable
     */
    public Folder_FoldersForRecipe(recipeId: number): Observable<HttpResponse<string[]>> {
        let uri = `/recipe/${recipeId}/folders`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<string[]>('get', uri, headers, params, null);
    }

    /**
     * Method Article_Get
     * @param term The identifier of article to retrieve
     * @return The full HTTP response as Observable
     */
    public Article_Get(term: string): Observable<HttpResponse<any>> {
        let uri = `/article/${term}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<any>('get', uri, headers, params, null);
    }

    /**
     * Method Article_Put
     * @param term The identifier of article to update
     * @param definition  The definition
     * @return The full HTTP response as Observable
     */
    public Article_Put(term: string, definition:string): Observable<HttpResponse<any>> {
        let uri = `/article/${term}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        let data = {definition: definition};
        return this.sendRequest<any>('put', uri, headers, params, data);
    }



    /**
     * Method GroceryList_Department
     * @param model The Internal API
     * @return The full HTTP response as Observable
     */
    public GroceryList_Department(model: API2ControllersGroceryListControllerDepartmentModel): Observable<HttpResponse<API2GroceryListDepartmentResult[]>> {
        let uri = `/grocerylist/department`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2GroceryListDepartmentResult[]>('post', uri, headers, params, JSON.stringify(model));
    }

    /**
     * Method GroceryList_Get
     * @return The full HTTP response as Observable
     */
    public GroceryList_Get(): Observable<HttpResponse<BigOvenModelAPI2GroceryList>> {
        let uri = `/grocerylist`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2GroceryList>('get', uri, headers, params, null);
    }

    /**
     * Method GroceryList_Delete
     * @return The full HTTP response as Observable
     */
    public GroceryList_Delete(): Observable<HttpResponse<SystemObject>> {
        let uri = `/grocerylist`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method GroceryList_AddRecipe
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public GroceryList_AddRecipe(data: API2ControllersGroceryListControllerPostGroceryListRecipeRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/grocerylist/recipe`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method GroceryList_Post
     * @param newItem The name, quantity, unit, notes, department
     * @return The full HTTP response as Observable
     */
    public GroceryList_Post(newItem: API2ControllersGroceryListControllerPostGroceryListAddLineRequest): Observable<HttpResponse<BigOvenModelShoppingListLine>> {
        let uri = `/grocerylist/line`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelShoppingListLine>('post', uri, headers, params, JSON.stringify(newItem));
    }

    /**
     * Method GroceryList_Post
     * @param newItem The name, quantity, unit, notes, department
     * @return The full HTTP response as Observable
     */
    public GroceryList_Post2(newItem: API2ControllersGroceryListControllerPostToGroceryListRecipeRequest): Observable<HttpResponse<BigOvenModelShoppingListLine>> {
        let uri = `/grocerylist/item`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelShoppingListLine>('post', uri, headers, params, JSON.stringify(newItem));
    }

    /**
     * Method GroceryList_PostGroceryListSync
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public GroceryList_PostGroceryListSync(req: API2ControllersGroceryListControllerPostGroceryListSyncRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/grocerylist/sync`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method GroceryList_GroceryListItemGuid
     * @param req The
     * @param guid The Internal API
     * @return The full HTTP response as Observable
     */
    public GroceryList_GroceryListItemGuid(req: API2ControllersGroceryListControllerUpdateItemByGuidRequest, guid: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/grocerylist/item/${guid}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('put', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method GroceryList_DeleteItemByGuid
     * @param guid The
     * @return The full HTTP response as Observable
     */
    public GroceryList_DeleteItemByGuid(guid: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/grocerylist/item/${guid}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method GroceryList_GroceryListRemoveMarkedItems
     * @return The full HTTP response as Observable
     */
    public GroceryList_GroceryListRemoveMarkedItems(): Observable<HttpResponse<BigOvenModelAPI2GroceryList>> {
        let uri = `/grocerylist/clearcheckedlines`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2GroceryList>('post', uri, headers, params, null);
    }

    /**
     * Method Images_Get
     * @param recipeId The Recipe ID (required)
     * @return The full HTTP response as Observable
     */
    public Images_Get(recipeId: number): Observable<HttpResponse<BigOvenModelAPIImage[]>> {
        let uri = `/recipe/${recipeId}/images`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIImage[]>('get', uri, headers, params, null);
    }

    /**
     * Method Images_GetRecipePhotos
     * @param recipeId The Recipe ID (required)
     * @param pg The Internal API
     * @param rpp The Internal API
     * @return The full HTTP response as Observable
     */
    public Images_GetRecipePhotos(recipeId: number, pg: number, rpp: number): Observable<HttpResponse<API2ControllersImagesControllerRecipePhotosResponse>> {
        let uri = `/recipe/${recipeId}/photos`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<API2ControllersImagesControllerRecipePhotosResponse>('get', uri, headers, params, null);
    }

    /**
     * Method Images_GetScanImages
     * @param recipeId The the recipe identifier (int)
     * @return The full HTTP response as Observable
     */
    public Images_GetScanImages(recipeId: number): Observable<HttpResponse<BigOvenModelAPIImage[]>> {
        let uri = `/recipe/${recipeId}/scans`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIImage[]>('get', uri, headers, params, null);
    }

    /**
     * Method Images_Delete
     * @param filename The
     * @param imageid The
     * @return The full HTTP response as Observable
     */
    public Images_Delete(filename: string, imageid: number): Observable<HttpResponse<SystemObject>> {
        let uri = `/images`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (filename) {
            params = params.set('filename', filename + '');
        }
        if (imageid) {
            params = params.set('imageid', imageid + '');
        }
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method Images_UploadRecipeImage
     * @param recipeId The Internal API
     * @param caption The Internal API
     * @param lat The Internal API
     * @param lng The Internal API
     * @return The full HTTP response as Observable
     */
    public Images_UploadRecipeImage(recipeId: string, caption: string, lat: number, lng: number): Observable<HttpResponse<SystemObject>> {
        let uri = `/recipe/${recipeId}/image`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (caption) {
            params = params.set('caption', caption + '');
        }
        if (lat) {
            params = params.set('lat', lat + '');
        }
        if (lng) {
            params = params.set('lng', lng + '');
        }
        return this.sendRequest<SystemObject>('post', uri, headers, params, null);
    }

    /**
     * Method Images_UploadUserAvatar
     * @return The full HTTP response as Observable
     */
    public Images_UploadUserAvatar(): Observable<HttpResponse<SystemObject>> {
        let uri = `/image/avatar`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, null);
    }

    /**
     * Method Me_Index
     * @return The full HTTP response as Observable
     */
    public Me_Index(): Observable<HttpResponse<API2ModelsBigOvenUser>> {
        let uri = `/me`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2ModelsBigOvenUser>('get', uri, headers, params, null);
    }

    /**
     * Method Me_PutMe
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Me_PutMe2(req: API2ModelsBigOvenUser): Observable<HttpResponse<API2ModelsBigOvenUser>> {
        let uri = `/me`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2ModelsBigOvenUser>('put', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Me_Skinny
     * @return The full HTTP response as Observable
     */
    public Me_Skinny(): Observable<HttpResponse<API2ModelsBigOvenUser>> {
        let uri = `/me/skinny`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2ModelsBigOvenUser>('get', uri, headers, params, null);
    }

    /**
     * Method Me_GetOptions
     * @return The full HTTP response as Observable
     */
    public Me_GetOptions(): Observable<HttpResponse<API2ControllersMeControllerPreferenceOptions>> {
        let uri = `/me/preferences/options`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2ControllersMeControllerPreferenceOptions>('get', uri, headers, params, null);
    }

    /**
     * Method Me_PutMe
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Me_PutMe(req: API2ModelsProfile): Observable<HttpResponse<API2ModelsBigOvenUser>> {
        let uri = `/me/profile`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2ModelsBigOvenUser>('put', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Me_PutMePersonal
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Me_PutMePersonal(req: API2ModelsPersonal): Observable<HttpResponse<API2ModelsBigOvenUser>> {
        let uri = `/me/personal`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2ModelsBigOvenUser>('put', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Me_PutMePreferences
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Me_PutMePreferences(req: API2ModelsPreference): Observable<HttpResponse<API2ModelsBigOvenUser>> {
        let uri = `/me/preferences`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2ModelsBigOvenUser>('put', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Menu_AddMenu
     * @param id The
     * @return The full HTTP response as Observable
     */
    public Menu_AddMenu(id: number): Observable<HttpResponse<SystemObject>> {
        let uri = `/menu/${id}/add`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, null);
    }

    /**
     * Method Menu_AddToGrocery
     * @param data The Internal API
     * @param id The Internal API
     * @return The full HTTP response as Observable
     */
    public Menu_AddToGrocery(data: API2ControllersMenuControllerAddToGroceryRequest, id: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/menu/${id}/addtogrocery`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Menu_Get
     * @param id The menu id (int)
     * @return The full HTTP response as Observable
     */
    public Menu_Get(id: number): Observable<HttpResponse<BigOvenModelAPI2PlannerSavedMenu>> {
        let uri = `/menu/${id}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2PlannerSavedMenu>('get', uri, headers, params, null);
    }

    /**
     * Method Menu_Delete
     * @param id The MenuID
     * @return The full HTTP response as Observable
     */
    public Menu_Delete(id: number): Observable<HttpResponse<SystemObject>> {
        let uri = `/menu/${id}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method Menu_GetMyMenus
     * @param pg The Internal API
     * @param rpp The Internal API
     * @return The full HTTP response as Observable
     */
    public Menu_GetMyMenus(pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIMenuSearchResult>> {
        let uri = `/menus`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIMenuSearchResult>('get', uri, headers, params, null);
    }

    /**
     * Method Menu_Search
     * @return The full HTTP response as Observable
     */
    public Menu_Search(): Observable<HttpResponse<BigOvenModelAPIMenuSearchResult>> {
        let uri = `/menu/search`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIMenuSearchResult>('get', uri, headers, params, null);
    }

    /**
     * Method Menu_GetMenuForDates
     * @param csvDates The
     * @return The full HTTP response as Observable
     */
    public Menu_GetMenuForDates(csvDates: string): Observable<HttpResponse<BigOvenModelAPIPlannerMealPlan>> {
        let uri = `/menu/getmenufordates`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (csvDates) {
            params = params.set('csvDates', csvDates + '');
        }
        return this.sendRequest<BigOvenModelAPIPlannerMealPlan>('get', uri, headers, params, null);
    }

    /**
     * Method Menu_Post
     * @param menu The
     * @return The full HTTP response as Observable
     */
    public Menu_Post(menu: BigOvenModelAPIPlannerSavedMenu): Observable<HttpResponse<SystemObject>> {
        let uri = `/menu`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(menu));
    }

    /**
     * Method Menu_PostReview
     * @param review The
     * @return The full HTTP response as Observable
     */
    public Menu_PostReview(review: BigOvenModelAPIPlannerMenuReview): Observable<HttpResponse<SystemObject>> {
        let uri = `/menu/review`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(review));
    }

    /**
     * Method Menu_AddToPlan
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Menu_AddToPlan(req: API2ControllersMenuControllerAddToPlanRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/menu/addtoplan`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Note_Get
     * @param recipeId The recipe identifier (integer)
     * @param noteId The The note ID (note -- it's not the RecipeID)
     * @return The full HTTP response as Observable
     */
    public Note_Get(recipeId: number, noteId: number): Observable<HttpResponse<BigOvenModelAPIRecipeNote>> {
        let uri = `/recipe/${recipeId}/note/${noteId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIRecipeNote>('get', uri, headers, params, null);
    }

    /**
     * Method Note_Put
     * @param recipeId The Internal API
     * @param noteId The Internal API
     * @param recipeNote The Internal API
     * @return The full HTTP response as Observable
     */
    public Note_Put(recipeId: number, noteId: number, recipeNote: API2ControllersNoteControllerNoteRequest): Observable<HttpResponse<BigOvenModelAPIRecipeNote>> {
        let uri = `/recipe/${recipeId}/note/${noteId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIRecipeNote>('put', uri, headers, params, JSON.stringify(recipeNote));
    }

    /**
     * Method Note_Delete
     * @param recipeId The recipeId (int)
     * @param noteId The noteId (int)
     * @return The full HTTP response as Observable
     */
    public Note_Delete(recipeId: number, noteId: number): Observable<HttpResponse<SystemObject>> {
        let uri = `/recipe/${recipeId}/note/${noteId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method Note_GetNotes
     * @param recipeId The recipeId (int)
     * @param pg The page (int, starting from 1)
     * @param rpp The recipeId
     * @return The full HTTP response as Observable
     */
    public Note_GetNotes(recipeId: number, pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIRecipeNoteList>> {
        let uri = `/recipe/${recipeId}/notes`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIRecipeNoteList>('get', uri, headers, params, null);
    }

    /**
     * Method Note_Post
     * @param recipeId The recipeId (int)
     * @param note The a recipe note, with fields: Date (YYYY-MM-DD string), Notes (string), People (string), Variations (string), RecipeID (int?)
     * @return The full HTTP response as Observable
     */
    public Note_Post(recipeId: number, note: API2ControllersNoteControllerNoteRequest): Observable<HttpResponse<BigOvenModelAPI2RecipeNote>> {
        let uri = `/recipe/${recipeId}/note`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2RecipeNote>('post', uri, headers, params, JSON.stringify(note));
    }

    /**
     * Method Planner_PostMealPlannerSync
     * @param data The a BigOven.Model.API.Planner.MealPlan
     * @return The full HTTP response as Observable
     */
    public Planner_PostMealPlannerSync(data: API2ControllersPlannerControllerPostMealPlannerSyncRequest): Observable<HttpResponse<BigOvenModelAPI2PlannerMealPlan>> {
        let uri = `/planner/sync`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2PlannerMealPlan>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Planner_Get
     * @param startdate The
     * @param enddate The
     * @return The full HTTP response as Observable
     */
    public Planner_Get(startdate: string, enddate: string): Observable<HttpResponse<BigOvenModelAPI2PlannerMealPlan>> {
        let uri = `/planner`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (startdate) {
            params = params.set('startdate', startdate + '');
        }
        if (enddate) {
            params = params.set('enddate', enddate + '');
        }
        return this.sendRequest<BigOvenModelAPI2PlannerMealPlan>('get', uri, headers, params, null);
    }

    /**
     * Method Private_IsAdmin
     * @return The full HTTP response as Observable
     */
    public Private_IsAdmin(): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/isadmin`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method Private_RecipeLongViewSignal
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_RecipeLongViewSignal(req: API2ControllersPrivateControllerRecipeLongViewSignalReq): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/signal/recipelongview`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Private_UserLaunchAppleWatch
     * @return The full HTTP response as Observable
     */
    public Private_UserLaunchAppleWatch(): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/signal/userlaunchapplewatch`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, null);
    }

    /**
     * Method Private_GroceryShoppingSignal
     * @return The full HTTP response as Observable
     */
    public Private_GroceryShoppingSignal(): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/signal/groceryshopping`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, null);
    }

    /**
     * Method Private_GroceryBuySignal
     * @return The full HTTP response as Observable
     */
    public Private_GroceryBuySignal(): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/signal/grocerybuy`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, null);
    }

    /**
     * Method Private_StartupMessage
     * @param app The
     * @param osversion The
     * @param appversion The
     * @return The full HTTP response as Observable
     */
    public Private_StartupMessage(app: string, osversion: string, appversion: string): Observable<HttpResponse<API2ModelsStartupMessageResponse>> {
        let uri = `/private/startupmessage`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (app) {
            params = params.set('app', app + '');
        }
        if (osversion) {
            params = params.set('osversion', osversion + '');
        }
        if (appversion) {
            params = params.set('appversion', appversion + '');
        }
        return this.sendRequest<API2ModelsStartupMessageResponse>('get', uri, headers, params, null);
    }

    /**
     * Method Private_RecipeSearchFacets
     * @param query The
     * @return The full HTTP response as Observable
     */
    public Private_RecipeSearchFacets(query: string): Observable<HttpResponse<string[]>> {
        let uri = `/private/recipe/search/facets`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (query) {
            params = params.set('query', query + '');
        }
        return this.sendRequest<string[]>('get', uri, headers, params, null);
    }

    /**
     * Method Private_GetHomePageQualityRecipes
     * @param rpp The Number of results desired
     * @return The full HTTP response as Observable
     */
    public Private_GetHomePageQualityRecipes(rpp: number): Observable<HttpResponse<BigOvenModelAPIRecipeInfo[]>> {
        let uri = `/private/homepagequality`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIRecipeInfo[]>('get', uri, headers, params, null);
    }

    /**
     * Method Private_Tip
     * @param term The
     * @return The full HTTP response as Observable
     */
    public Private_Tip(term: string): Observable<HttpResponse<BigOvenModelTip>> {
        let uri = `/private/tip`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (term) {
            params = params.set('term', term + '');
        }
        return this.sendRequest<BigOvenModelTip>('get', uri, headers, params, null);
    }

    /**
     * Method Private_GetFeaturedQualityRecipes
     * @param pg The Page number.  Required.
     * @param rpp The Number of results desired.  Required.
     * @return The full HTTP response as Observable
     */
    public Private_GetFeaturedQualityRecipes(pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIRecipeInfo[]>> {
        let uri = `/private/featuredquality`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIRecipeInfo[]>('get', uri, headers, params, null);
    }

    /**
     * Method Private_MenuCategories
     * @return The full HTTP response as Observable
     */
    public Private_MenuCategories(): Observable<HttpResponse<API2ControllersPrivateControllerCategoriesRootObject>> {
        let uri = `/private/menucategories`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2ControllersPrivateControllerCategoriesRootObject>('get', uri, headers, params, null);
    }

    /**
     * Method Private_PostLogEntry
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_PostLogEntry(data: API2ControllersPrivateControllerLogReq): Observable<HttpResponse<BigOvenModelLogEntry>> {
        let uri = `/private/log`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelLogEntry>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Private_PostPremiumPurchase
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_PostPremiumPurchase(req: API2ControllersPrivateControllerPremiumPurchaseIOSRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/premium/purchase`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Private_registeriospurchase
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_registeriospurchase(req: API2ControllersPrivateControllerPremiumPurchaseIOSRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/register-ios-purchase`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Private_PostPremiumPurchaseAndroid
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_PostPremiumPurchaseAndroid(req: API2ControllersPrivateControllerPremiumPurchaseAndroidRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/premium/purchase/android`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Private_PremiumPurchaseAndroidSubscription
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_PremiumPurchaseAndroidSubscription(data: API2ControllersPrivateControllerPremiumPurchaseAndroidSubscriptionRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/premiumpurchaseandroidsubscription`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Private_PremiumPurchaseAndroidSubscriptionNew
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_PremiumPurchaseAndroidSubscriptionNew(data: API2ControllersPrivateControllerPremiumPurchaseAndroidSubscriptionRequest): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/private/subscription/android`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Private_PostPremiumPurchaseWindows
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_PostPremiumPurchaseWindows(req: API2ControllersPrivateControllerPostPremiumPurchaseWindowsRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/premiumpurchasewindows`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Private_PremiumPurchaseCredits
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_PremiumPurchaseCredits(data: API2ControllersPrivateControllerPremiumPurchaseIOSRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/premiumpurchasecredits`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Private_PostPremiumPurchaseCreditsAndroid
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_PostPremiumPurchaseCreditsAndroid(data: API2ControllersPrivateControllerPremiumPurchaseAndroidRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/premiumpurchasecreditsandroid`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Private_PostPremiumPurchaseCreditsAndroidNew
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_PostPremiumPurchaseCreditsAndroidNew(data: API2ControllersPrivateControllerPremiumPurchaseAndroidRequestNew): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/purchase/credits/android`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Private_ZapCacheWallpaper
     * @return The full HTTP response as Observable
     */
    public Private_ZapCacheWallpaper(): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/zapcachewallpaper`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method Private_ZapCacheCollections
     * @return The full HTTP response as Observable
     */
    public Private_ZapCacheCollections(): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/zapcachecollections`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method Private_Wallpaper
     * @param device The
     * @param test The
     * @param pretendDate The
     * @return The full HTTP response as Observable
     */
    public Private_Wallpaper(device: string, test: string, pretendDate: string): Observable<HttpResponse<BigOvenModelAPIAdBannerPayload[]>> {
        let uri = `/private/wallpaper`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (device) {
            params = params.set('device', device + '');
        }
        if (test) {
            params = params.set('test', test + '');
        }
        if (pretendDate) {
            params = params.set('pretendDate', pretendDate + '');
        }
        return this.sendRequest<BigOvenModelAPIAdBannerPayload[]>('get', uri, headers, params, null);
    }

    /**
     * Method Private_Collections
     * @param pg The Internal API
     * @param rpp The Internal API
     * @param test The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_Collections(pg: number, rpp: number, test: string): Observable<HttpResponse<BigOvenModelAPI2CollectionInfo[]>> {
        let uri = `/private/collections`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        if (test) {
            params = params.set('test', test + '');
        }
        return this.sendRequest<BigOvenModelAPI2CollectionInfo[]>('get', uri, headers, params, null);
    }

    /**
     * Method Private_Configuration
     * @return The full HTTP response as Observable
     */
    public Private_Configuration(): Observable<HttpResponse<BigOvenModelAPI2Configuration>> {
        let uri = `/private/configuration`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2Configuration>('get', uri, headers, params, null);
    }

    /**
     * Method Private_NotifyRegister
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_NotifyRegister(req: API2ControllersPrivateControllerNotifyRegisterRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/notify/register`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Private_NotifyDevice
     * @param uniqueIdentifier The
     * @param channelUri The Internal API
     * @param timeZone The Internal API
     * @return The full HTTP response as Observable
     */
    public Private_NotifyDevice2(uniqueIdentifier: string, channelUri: string, timeZone: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/notify/device/${uniqueIdentifier}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (channelUri) {
            params = params.set('channelUri', channelUri + '');
        }
        if (timeZone) {
            params = params.set('timeZone', timeZone + '');
        }
        return this.sendRequest<SystemObject>('put', uri, headers, params, null);
    }

    /**
     * Method Private_NotifyDevice
     * @param uniqueIdentifier The device identifier
     * @return The full HTTP response as Observable
     */
    public Private_NotifyDevice(uniqueIdentifier: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/private/notify/device/${uniqueIdentifier}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method Recipe_ThrowError
     * @return The full HTTP response as Observable
     */
    public Recipe_ThrowError(): Observable<HttpResponse<any>> {
        let uri = `/recipes/throwerror`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<any>('get', uri, headers, params, null);
    }
//
    /**
     * Method Recipe_Raves
     * @param pg The page, starting with 1
     * @param rpp The results per page
     * @return The full HTTP response as Observable
     */
    public Recipe_Raves(pg: number, rpp: number): Observable<HttpResponse<BigOvenModelRecipeInfoReviewTuple2[]>> {
        let uri = `/recipes/raves`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelRecipeInfoReviewTuple2[]>('get', uri, headers, params, null);
    }

    /**
     * Method Recipe_ZapRecipe
     * @param id The Internal API
     * @return The full HTTP response as Observable
     */
    public Recipe_ZapRecipe(id: number): Observable<HttpResponse<SystemObject>> {
        let uri = `/recipe/${id}/zap`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method Recipe_Get
     * @param id The the Recipe ID to retrieve
     * @param prefetch The Internal API
     * @return The full HTTP response as Observable
     */
    public Recipe_Get(id: number, prefetch: boolean): Observable<HttpResponse<BigOvenModelAPI2Recipe>> {
        let uri = `/recipe/${id}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (prefetch) {
            params = params.set('prefetch', prefetch + '');
        }
        // console.log("BigOvenModelAPI2Recipe" + "" + this.sendRequest<BigOvenModelAPI2Recipe>('get', uri, headers, params, null));
        return this.sendRequest<BigOvenModelAPI2Recipe>('get', uri, headers, params, null);
    }

    /**
     * Method Recipe_Delete
     * @param id The Internal API
     * @return The full HTTP response as Observable
     */
    public Recipe_Delete(id: number): Observable<HttpResponse<SystemObject>> {
        let uri = `/recipe/${id}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method Recipe_Related
     * @param recipeId The Internal API
     * @param pg The
     * @param rpp The
     * @return The full HTTP response as Observable
     */
    public Recipe_Related(recipeId: number, pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPI2RecipeSearchResult>> {
        let uri = `/recipe/${recipeId}/related`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPI2RecipeSearchResult>('get', uri, headers, params, null);
    }

    /**
     * Method Recipe_Feedback
     * @param recipeId The
     * @param data The The payload for feedback, which includes the field "feedback"
     * @return The full HTTP response as Observable
     */
    public Recipe_Feedback(recipeId: number, data: API2ControllersRecipeControllerFeedbackDTO): Observable<HttpResponse<SystemObject>> {
        let uri = `/recipe/${recipeId}/feedback`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Recipe_GetRandomRecipe
     * @return The full HTTP response as Observable
     */
    public Recipe_GetRandomRecipe(): Observable<HttpResponse<BigOvenModelAPIRecipe>> {
        let uri = `/recipes/random`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIRecipe>('get', uri, headers, params, null);
    }

    /**
     * Method Recipe_Send
     * @param data The RecipeSendRequest, containing recipeId, notes, address, addressBookType ('email','BigOven')
     * @param recipeId The
     * @return The full HTTP response as Observable
     */
    public Recipe_Send(data: API2ControllersRecipeControllerRecipeSendRequest, recipeId: number): Observable<HttpResponse<SystemObject>> {
        let uri = `/recipe/${recipeId}/send`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Recipe_RecipeSearch
     * @param any_kw The Search anywhere in the recipe for the keyword
     * @param folder The Search in a specific folder name for the authenticated user
     * @param coll The Limit to a collection ID number
     * @param filter The optionally set to either "myrecipes", "try", "favorites","added" to filter to just the authenticated user's recipe set
     * @param title_kw The Search just in the recipe title for the keyword
     * @param userId The Set the target userid to search their public recipes
     * @param username The Set the target username to search their public recipes
     * @param token The
     * @param photos The if set to true, limit search results to photos only
     * @param boostmine The if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)
     * @param include_cat The integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is "Main Dish &gt; Casseroles".
     * @param exclude_cat The like include_cat, set this to an integer to exclude a specific category
     * @param include_primarycat The csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
     * @param exclude_primarycat The csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
     * @param include_ing The A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken
     * @param exclude_ing The A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)
     * @param cuisine The Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese
     * @param db The
     * @param userset The If set to a given username, it'll force the search to filter to just that username
     * @param servingsMin The Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by "dozen", etc. This parameter simply specifies the minimum number for that value entered in "yield."
     * @param totalMins The Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert "1 hour, 15 minutes" to 75 before passing in.)
     * @param maxIngredients The Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less
     * @param minIngredients The Optional. If supplied, will restrict results to recipes that have at least {minIngredients}
     * @param rpp The integer; results per page
     * @param pg The integer: the page number
     * @param vtn The when set to 1, limit to vegetarian (Powersearch-capable plan required)
     * @param vgn The when set to 1, limit to vegan (Powersearch-capable plan required)
     * @param chs The when set to 1, limit to contains-cheese (Powersearch-capable plan required)
     * @param glf The when set to 1, limit to gluten-free (Powersearch-capable plan required)
     * @param ntf The when set to 1, limit to nut-free (Powersearch-capable plan required)
     * @param dyf The when set to 1, limit to dairy-free (Powersearch-capable plan required)
     * @param sff The when set to 1, limit to seafood-free (Powersearch-capable plan required)
     * @param slf The when set to 1, limit to shellfish-free (Powersearch-capable plan required)
     * @param tnf The when set to 1, limit to tree-nut free (Powersearch-capable plan required)
     * @param wmf The when set to 1, limit to white-meat free (Powersearch-capable plan required)
     * @param rmf The when set to 1, limit to red-meat free (Powersearch-capable plan required)
     * @param cps The when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)
     * @param champion The optional. When set to 1, this will limit search results to "best of" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter.
     * @param synonyms The optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon)
     * @return The full HTTP response as Observable
     */
    public Recipe_RecipeSearch(any_kw: string, folder: string, coll: number, filter: string, title_kw: string, userId: number, username: string, token: string, photos: boolean, boostmine: boolean, include_cat: string, exclude_cat: string, include_primarycat: string, exclude_primarycat: string, include_ing: string, exclude_ing: string, cuisine: string, db: string, userset: string, servingsMin: number, totalMins: number, maxIngredients: number, minIngredients: number, rpp: number, pg: number, vtn: number, vgn: number, chs: number, glf: number, ntf: number, dyf: number, sff: number, slf: number, tnf: number, wmf: number, rmf: number, cps: number, champion: number, synonyms: boolean): Observable<HttpResponse<BigOvenModelAPI2RecipeSearchResult>> {
        let uri = `/recipes`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (any_kw) {
            params = params.set('any_kw', any_kw + '');
        }
        if (folder) {
            params = params.set('folder', folder + '');
        }
        if (coll) {
            params = params.set('coll', coll + '');
        }
        if (filter) {
            params = params.set('filter', filter + '');
        }
        if (title_kw) {
            params = params.set('title_kw', title_kw + '');
        }
        if (userId) {
            params = params.set('userId', userId + '');
        }
        if (username) {
            params = params.set('username', username + '');
        }
        if (token) {
            params = params.set('token', token + '');
        }
        if (photos) {
            params = params.set('photos', photos + '');
        }
        if (boostmine) {
            params = params.set('boostmine', boostmine + '');
        }
        if (include_cat) {
            params = params.set('include_cat', include_cat + '');
        }
        if (exclude_cat) {
            params = params.set('exclude_cat', exclude_cat + '');
        }
        if (include_primarycat) {
            params = params.set('include_primarycat', include_primarycat + '');
        }
        if (exclude_primarycat) {
            params = params.set('exclude_primarycat', exclude_primarycat + '');
        }
        if (include_ing) {
            params = params.set('include_ing', include_ing + '');
        }
        if (exclude_ing) {
            params = params.set('exclude_ing', exclude_ing + '');
        }
        if (cuisine) {
            params = params.set('cuisine', cuisine + '');
        }
        if (db) {
            params = params.set('db', db + '');
        }
        if (userset) {
            params = params.set('userset', userset + '');
        }
        if (servingsMin) {
            params = params.set('servingsMin', servingsMin + '');
        }
        if (totalMins) {
            params = params.set('totalMins', totalMins + '');
        }
        if (maxIngredients) {
            params = params.set('maxIngredients', maxIngredients + '');
        }
        if (minIngredients) {
            params = params.set('minIngredients', minIngredients + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (vtn) {
            params = params.set('vtn', vtn + '');
        }
        if (vgn) {
            params = params.set('vgn', vgn + '');
        }
        if (chs) {
            params = params.set('chs', chs + '');
        }
        if (glf) {
            params = params.set('glf', glf + '');
        }
        if (ntf) {
            params = params.set('ntf', ntf + '');
        }
        if (dyf) {
            params = params.set('dyf', dyf + '');
        }
        if (sff) {
            params = params.set('sff', sff + '');
        }
        if (slf) {
            params = params.set('slf', slf + '');
        }
        if (tnf) {
            params = params.set('tnf', tnf + '');
        }
        if (wmf) {
            params = params.set('wmf', wmf + '');
        }
        if (rmf) {
            params = params.set('rmf', rmf + '');
        }
        if (cps) {
            params = params.set('cps', cps + '');
        }
        if (champion) {
            params = params.set('champion', champion + '');
        }
        if (synonyms) {
            params = params.set('synonyms', synonyms + '');
        }
        return this.sendRequest<BigOvenModelAPI2RecipeSearchResult>('get', uri, headers, params, null);
    }

    /**
     * Method Recipe_Categories
     * @return The full HTTP response as Observable
     */
    public Recipe_Categories(): Observable<HttpResponse<BigOvenModelRecipeCategory[]>> {
        let uri = `/recipe/categories`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelRecipeCategory[]>('get', uri, headers, params, null);
    }

    /**
     * Method Recipe_AutoComplete
     * @param query The
     * @param limit The
     * @return The full HTTP response as Observable
     */
    public Recipe_AutoComplete(query: string, limit: number): Observable<HttpResponse<string[]>> {
        let uri = `/recipe/autocomplete`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (query) {
            params = params.set('query', query + '');
        }
        if (limit) {
            params = params.set('limit', limit + '');
        }
        return this.sendRequest<string[]>('get', uri, headers, params, null);
    }

    /**
     * Method Recipe_AutoComplete
     * @param query The
     * @param limit The
     * @return The full HTTP response as Observable
     */
    public Recipe_AutoComplete_Mine(query: string, limit: number): Observable<HttpResponse<API2BigOvenRecipeInfoTiny>> {
        let uri = `/recipe/autocomplete/mine`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (query) {
            params = params.set('query', query + '');
        }
        if (limit) {
            params = params.set('limit', limit + '');
        }
        return this.sendRequest<API2BigOvenRecipeInfoTiny>('get', uri, headers, params, null);
    }

    /**
     * Method Recipe_AutoComplete_All
     * @param query The
     * @param limit The
     * @return The full HTTP response as Observable
     */
    public Recipe_AutoComplete_All(query: string, limit: number): Observable<HttpResponse<API2BigOvenRecipeInfoTiny>> {
        let uri = `/recipe/autocomplete/all`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (query) {
            params = params.set('query', query + '');
        }
        if (limit) {
            params = params.set('limit', limit + '');
        }
        return this.sendRequest<API2BigOvenRecipeInfoTiny>('get', uri, headers, params, null);
    }

    /**
     * Method Recipe_Scan
     * @param test The Internal API
     * @param devicetype The Internal API
     * @param lat The Internal API
     * @param lng The Internal API
     * @return The full HTTP response as Observable
     */
    public Recipe_Scan(test: boolean, devicetype: string, lat: number, lng: number): Observable<HttpResponse<any>> {
        let uri = `/recipe/scan`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (test) {
            params = params.set('test', test + '');
        }
        if (devicetype) {
            params = params.set('devicetype', devicetype + '');
        }
        if (lat) {
            params = params.set('lat', lat + '');
        }
        if (lng) {
            params = params.set('lng', lng + '');
        }
        return this.sendRequest<any>('post', uri, headers, params, null);
    }

    /**
     * Method Recipe_Clip
     * @param data The include targetUrl -- the url to fetch
     * @return The full HTTP response as Observable
     */
    public Recipe_Clip2(data: API2ControllersRecipeControllerBookmarkRecipeRequest): Observable<HttpResponse<BigOvenModelAPI2Recipe>> {
        let uri = `/recipe/bookmark`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2Recipe>('post', uri, headers, params, JSON.stringify(data));
    }



    /**
     * Method Recipe_Clip
     * @param data The include targetUrl -- the url to fetch
     * @return The full HTTP response as Observable
     */
    public Recipe_Clip(data: API2ControllersRecipeControllerBookmarkRecipeRequest): Observable<HttpResponse<BigOvenModelAPI2Recipe>> {
        let uri = `/recipe/clip`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2Recipe>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Recipe_MobileShare
     * @param data The see RecipeMobileShareRequest
     * @return The full HTTP response as Observable
     */
    public Recipe_MobileShare(data: API2ControllersRecipeControllerRecipeMobileShareRequest): Observable<HttpResponse<BigOvenModelAPI2Recipe>> {
        let uri = `/recipe/clip/mobile/share`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPI2Recipe>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Recipe_Put
     * @param recipe The
     * @return The full HTTP response as Observable
     */
    public Recipe_Put(recipe: BigOvenModelAPIRecipe): Observable<HttpResponse<BigOvenModelAPIRecipe>> {
        let uri = `/recipe`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIRecipe>('put', uri, headers, params, JSON.stringify(recipe));
    }

    /**
     * Method Recipe_Post
     * @param recipe The
     * @return The full HTTP response as Observable
     */
    public Recipe_Post(recipe: BigOvenModelAPIRecipe): Observable<HttpResponse<BigOvenModelAPIRecipe>> {
        let uri = `/recipe`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIRecipe>('post', uri, headers, params, JSON.stringify(recipe));
    }

    /**
     * Method Recipe_RecentViews
     * @param pg The Page number starting with 1
     * @param rpp The results per page
     * @return The full HTTP response as Observable
     */
    public Recipe_RecentViews(pg: number, rpp: number): Observable<HttpResponse<BigOvenModelRecipeInfoDateTuple2[]>> {
        let uri = `/recipes/recentviews`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelRecipeInfoDateTuple2[]>('get', uri, headers, params, null);
    }

    /**
     * Method Review_Get
     * @param reviewId The int
     * @param recipeId The int
     * @return The full HTTP response as Observable
     */
    public Review_Get(reviewId: number, recipeId: number): Observable<HttpResponse<BigOvenModelAPIReview>> {
        let uri = `/recipe/${recipeId}/review/${reviewId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIReview>('get', uri, headers, params, null);
    }

    /**
     * Method Review_PutLegacy
     * @param reviewId The reviewId (int)
     * @param review The
     * @param recipeId The recipeId (int)
     * @return The full HTTP response as Observable
     */
    public Review_PutLegacy(reviewId: number, review: API2ControllersReviewControllerReviewRequestLegacy, recipeId: number): Observable<HttpResponse<BigOvenModelAPIReview>> {
        let uri = `/recipe/${recipeId}/review/${reviewId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIReview>('put', uri, headers, params, JSON.stringify(review));
    }

    /**
     * Method Review_Delete
     * @param reviewId The
     * @param recipeId The Internal API
     * @return The full HTTP response as Observable
     */
    public Review_Delete(reviewId: string, recipeId: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/recipe/${recipeId}/review/${reviewId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method Review_Get
     * @param reviewId The Internal API
     * @return The full HTTP response as Observable
     */
    public Review_Get3(reviewId: string): Observable<HttpResponse<BigOvenModelAPIReview>> {
        let uri = `/recipe/review/${reviewId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIReview>('get', uri, headers, params, null);
    }

    /**
     * Method Review_Put
     * @param reviewId The
     * @param review The
     * @return The full HTTP response as Observable
     */
    public Review_Put(reviewId: string, review: API2ControllersReviewControllerReviewRequest): Observable<HttpResponse<BigOvenModelAPIReview>> {
        let uri = `/recipe/review/${reviewId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIReview>('put', uri, headers, params, JSON.stringify(review));
    }

    /**
     * Method Review_Get
     * @param recipeId The
     * @return The full HTTP response as Observable
     */
    public Review_GetMyReview(recipeId: number): Observable<HttpResponse<BigOvenModelAPIReview>> {

        let uri = `/recipe/${recipeId}/review`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIReview>('get', uri, headers, params, null);
    }

    /**
     * Method Review_Post
     * @param recipeId The
     * @param data The
     * @return The full HTTP response as Observable
     */
    public Review_Post(recipeId: number, data: API2ControllersReviewControllerReviewRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/recipe/${recipeId}/review`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Review_GetReviews
     * @param recipeId The recipe id (int)
     * @param pg The the page (int), starting with 1
     * @param rpp The results per page (int)
     * @return The full HTTP response as Observable
     */
    public Review_GetReviews(recipeId: number, pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIReview[]>> {
        let uri = `/recipe/${recipeId}/reviews`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIReview[]>('get', uri, headers, params, null);
    }

    /**
     * Method Review_GetReplies
     * @param reviewId The
     * @param pg The the page (int), starting with 1
     * @param rpp The results per page (int)
     * @return The full HTTP response as Observable
     */
    public Review_GetReplies(reviewId: string, pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIReply[]>> {
        let uri = `/recipe/review/${reviewId}/replies`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIReply[]>('get', uri, headers, params, null);
    }

    /**
     * Method Review_PostReply
     * @param reviewId The
     * @param data The
     * @return The full HTTP response as Observable
     */
    public Review_PostReply(reviewId: string, data: API2ControllersReviewControllerPostReplyReq): Observable<HttpResponse<BigOvenModelAPIReply>> {
        let uri = `/recipe/review/${reviewId}/replies`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIReply>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Review_PutReply
     * @param replyId The
     * @param data The
     * @return The full HTTP response as Observable
     */
    public Review_PutReply(replyId: string, data: API2ControllersReviewControllerPostReplyReq): Observable<HttpResponse<BigOvenModelAPIReply>> {
        let uri = `/recipe/review/replies/${replyId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIReply>('put', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Review_DeleteReply
     * @param replyId The
     * @return The full HTTP response as Observable
     */
    public Review_DeleteReply(replyId: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/recipe/review/replies/${replyId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method Social_Spotlight
     * @param pg The
     * @param rpp The
     * @param test The
     * @return The full HTTP response as Observable
     */
    public Social_Spotlight(pg: number, rpp: number, test: boolean): Observable<HttpResponse<BigOvenModelAPI2Tile[]>> {
        let uri = `/social/spotlight`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        if (test) {
            params = params.set('test', test + '');
        }
        return this.sendRequest<BigOvenModelAPI2Tile[]>('get', uri, headers, params, null);
    }

    /**
     * Method Social_InboxSeen
     * @param data The
     * @return The full HTTP response as Observable
     */
    public Social_InboxSeen(data: API2ControllersSocialControllerInboxSeenRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/social/inbox/seen`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Social_InboxUnseen
     * @return The full HTTP response as Observable
     */
    public Social_InboxUnseen(): Observable<HttpResponse<SystemObject>> {
        let uri = `/social/inbox/unseen`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method Social_Inbox
     * @param pg The
     * @param rpp The
     * @param since The
     * @return The full HTTP response as Observable
     */
    public Social_Inbox(pg: number, rpp: number, since: string): Observable<HttpResponse<BigOvenModelAPI2InboxNotification[]>> {
        let uri = `/social/inbox`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        if (since) {
            params = params.set('since', since + '');
        }
        return this.sendRequest<BigOvenModelAPI2InboxNotification[]>('get', uri, headers, params, null);
    }

    /**
     * Method Social_Activity
     * @param activityId The Internal API
     * @return The full HTTP response as Observable
     */
    public Social_Activity(activityId: string): Observable<HttpResponse<BigOvenLoggerActivityLogEntry>> {
        let uri = `/social/activity/${activityId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenLoggerActivityLogEntry>('get', uri, headers, params, null);
    }

    /**
     * Method Social_ActivityComment
     * @param activityId The
     * @param text The
     * @return The full HTTP response as Observable
     */
    public Social_ActivityComment2(activityId: string, text: string): Observable<HttpResponse<BigOvenLoggerStreamComment>> {
        let uri = `/social/activity/${activityId}/comment`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (text) {
            params = params.set('text', text + '');
        }
        return this.sendRequest<BigOvenLoggerStreamComment>('post', uri, headers, params, null);
    }

    /**
     * Method Social_ActivityComment
     * @param activityId The
     * @param commentId The
     * @param text The
     * @return The full HTTP response as Observable
     */
    public Social_ActivityComment3(activityId: string, commentId: string, text: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/social/activity/${activityId}/comment/${commentId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (text) {
            params = params.set('text', text + '');
        }
        return this.sendRequest<SystemObject>('put', uri, headers, params, null);
    }

    /**
     * Method Social_ActivityComment
     * @param activityId The Internal API
     * @param commentId The Internal API
     * @return The full HTTP response as Observable
     */
    public Social_ActivityComment(activityId: string, commentId: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/social/activity/${activityId}/comment/${commentId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method Social_ActivityCommentReply
     * @param req The
     * @param activityId The Internal API
     * @param commentId The Internal API
     * @return The full HTTP response as Observable
     */
    public Social_ActivityCommentReply(req: API2ControllersSocialControllerActivityCommentReplyRequest, activityId: string, commentId: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/social/activity/${activityId}/comment/${commentId}/reply`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method User_PopulateFollowViaFacebook
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public User_PopulateFollowViaFacebook(req: API2ControllersUserControllerPopulateViaFBRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/follow/populateviafacebook`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method User_GetHousehold
     * @return The full HTTP response as Observable
     */
    public User_GetHousehold(): Observable<HttpResponse<API2ControllersUserControllerHouseholdMember[]>> {
        let uri = `/user/household`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<API2ControllersUserControllerHouseholdMember[]>('get', uri, headers, params, null);
    }

    /**
     * Method User_DeleteHouseholdMemberByEmail
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public User_DeleteHouseholdMemberByEmail(req: API2ControllersUserControllerInviteHouseholdReq): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/household`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method User_InviteHouseholdMember
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public User_InviteHouseholdMember(req: API2ControllersUserControllerInviteHouseholdReq): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/household/invite`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method User_RevokeHouseholdMember
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public User_RevokeHouseholdMember(req: API2ControllersUserControllerRevokeHouseholdMemberReq): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/household/invite`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method User_WithdrawFromHousehold
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public User_WithdrawFromHousehold(req: API2ControllersUserControllerWithdrawFromHouseholdReq): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/household/withdraw`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method User_Follows
     * @param pg The Internal API
     * @param rpp The Internal API
     * @return The full HTTP response as Observable
     */
    public User_Follows3(pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIUserInfoTiny[]>> {
        let uri = `/user/follows`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIUserInfoTiny[]>('get', uri, headers, params, null);
    }

    /**
     * Method User_FollowAdd
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public User_FollowAdd(data: API2ControllersUserControllerFollowAddReq): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/follows`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method User_UserNameAvailable
     * @param seed The Internal API
     * @return The full HTTP response as Observable
     */
    public User_UserNameAvailable(seed: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/usernames/suggest/${seed}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method User_UsernameAvailable
     * @param username The
     * @return The full HTTP response as Observable
     */
    public User_UsernameAvailable(username: string): Observable<HttpResponse<any>> {
        let uri = `/user/username/available/${username}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<any>('get', uri, headers, params, null);
    }

    /**
     * Method User_CreateAnonymousAccount
     * @return The full HTTP response as Observable
     */
    public User_CreateAnonymousAccount(): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/user/anonymous`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('post', uri, headers, params, null);
    }

    /**
     * Method User_Usernames
     * @param username The Internal API
     * @return The full HTTP response as Observable
     */
    public User_Usernames(username: string): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/usernames/${username}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method User_Follow
     * @param userId The
     * @return The full HTTP response as Observable
     */
    public User_Follow_Delete(userId: number): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/follows/${userId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method User_SuggestedFollows
     * @return The full HTTP response as Observable
     */
    public User_SuggestedFollows(): Observable<HttpResponse<BigOvenModelAPIUserInfoGroup[]>> {
        let uri = `/user/follows/suggested`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUserInfoGroup[]>('get', uri, headers, params, null);
    }

    /**
     * Method User_Search
     * @param query The Prefix to search (won't be executed with less than 3 chars)
     * @param pg The
     * @param rpp The
     * @param facebookId The optional -- find users by facebookId
     * @return The full HTTP response as Observable
     */
    public User_Search(query: string, pg: number, rpp: number, facebookId: string): Observable<HttpResponse<BigOvenModelAPI2UserInfoTinyx[]>> {
        let uri = `/users`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (query) {
            params = params.set('query', query + '');
        }
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        if (facebookId) {
            params = params.set('facebookId', facebookId + '');
        }
        return this.sendRequest<BigOvenModelAPI2UserInfoTinyx[]>('get', uri, headers, params, null);
    }

    /**
     * Method User_AutoComplete
     * @param query The
     * @param pg The
     * @param rpp The
     * @return The full HTTP response as Observable
     */
    public User_AutoComplete(query: string, pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIUserInfoTiny[]>> {
        let uri = `/user/autocomplete`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (query) {
            params = params.set('query', query + '');
        }
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIUserInfoTiny[]>('get', uri, headers, params, null);
    }

    /**
     * Method User_Token
     * @param unPw The Username/Password class. Populate with "username" and "password" fields OR "email" and "password" fields.
     * @return The full HTTP response as Observable
     */
    public User_Token(unPw: API2ControllersUserControllerExchangeBasicAuthForTokenRequest): Observable<HttpResponse<any>> {
        let uri = `/user/token`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(unPw));
    }

    public User_UpdatePassword(data: API2ControllersUtilsUpdatePassword):Observable<HttpResponse<any>> {
        let uri = `/utils/user/updatepassword`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(data));
    }

    public Utils_User_Send_Recipe(data: API2SendRecipeReq):Observable<HttpResponse<any>>{
        let uri = `/utils/user/sendrecipe`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method User_GetProfile
     * @return The full HTTP response as Observable
     */
    public User_GetProfile(): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/user`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('get', uri, headers, params, null);
    }

    /**
     * Method User_PutUser
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public User_PutUser(data: API2ControllersUserControllerProfilePutRequest): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/user`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('put', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method User_PostUser
     * @param user The Internal API
     * @return The full HTTP response as Observable
     */
    public User_PostUser(user: API2ControllersUserControllerProfilePostRequest): Observable<HttpResponse<any>> {
        let uri = `/user`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(user));
    }

    /**
     * Method User_DeleteMe
     * @return The full HTTP response as Observable
     */
    public User_DeleteMe(): Observable<HttpResponse<SystemObject>> {
        let uri = `/user`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('delete', uri, headers, params, null);
    }

    /**
     * Method User_GetPreferences
     * @return The full HTTP response as Observable
     */
    public User_GetPreferences(): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/preferences`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method User_PostUserPreferences
     * @param req The
     * @return The full HTTP response as Observable
     */
    public User_PostUserPreferences2(req: API2ControllersUserControllerPreferencesReq): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/preferences`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('put', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method User_PostUserPreferences
     * @param req The
     * @return The full HTTP response as Observable
     */
    public User_PostUserPreferences(req: API2ControllersUserControllerPreferencesReq): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/preferences`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method User_Forgot
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public User_Forgot(data: API2ControllersUserControllerUserForgotReq): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/forgot`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method User_UpdateFacebookInfo
     * @param fbInfo The Internal API
     * @return The full HTTP response as Observable
     */
    public User_UpdateFacebookInfo(fbInfo: API2ControllersUserControllerPostFacebookInfoRequest): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/fb`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('put', uri, headers, params, JSON.stringify(fbInfo));
    }

    /**
     * Method User_Follows
     * @param userId The Internal API
     * @param pg The Internal API
     * @param rpp The Internal API
     * @return The full HTTP response as Observable
     */
    public User_Follows(userId: number, pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIUserInfoTiny[]>> {
        let uri = `/user/${userId}/follows`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIUserInfoTiny[]>('get', uri, headers, params, null);
    }

    /**
     * Method User_Followers
     * @param pg The Internal API
     * @param rpp The Internal API
     * @return The full HTTP response as Observable
     */
    public User_Followers(pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIUserInfoTiny[]>> {
        let uri = `/user/followers`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIUserInfoTiny[]>('get', uri, headers, params, null);
    }

    /**
     * Method User_FollowersOfUser
     * @param userId The Internal API
     * @param pg The Internal API
     * @param rpp The Internal API
     * @return The full HTTP response as Observable
     */
    public User_FollowersOfUser(userId: number, pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIUserInfoTiny[]>> {
        let uri = `/user/${userId}/followers`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIUserInfoTiny[]>('get', uri, headers, params, null);
    }

    /**
     * Method User_AmIFollowing
     * @param amIFollowingUserId The
     * @return The full HTTP response as Observable
     */
    public User_AmIFollowing(amIFollowingUserId: number): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/${amIFollowingUserId}/following`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method User_Upload
     * @return The full HTTP response as Observable
     */
    public User_Upload(body): Observable<HttpResponse<SystemObject>> {
        let uri = `/user/image`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('post', uri, headers, params, body);
    }

    /**
     * Method User_Get
     * @param userId The
     * @return The full HTTP response as Observable
     */
    public User_Get2(userId: number): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/user/${userId}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('get', uri, headers, params, null);
    }

    /**
     * Method User_Get
     * @param username The
     * @return The full HTTP response as Observable
     */
    public User_Get(username: string): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/user/${username}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('get', uri, headers, params, null);
    }

    /**
     * Method Utils_OAuth2Callback
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Utils_OAuth2Callback2(data: API2ControllersUtilsControllerOAuth2Request): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/utils/oauth2callback`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('get', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Utils_OAuth2Callback
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Utils_OAuth2Callback3(data: API2ControllersUtilsControllerOAuth2RequestPut): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/utils/oauth2callback`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('put', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Utils_OAuth2Callback
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Utils_OAuth2Callback(data: API2ControllersUtilsControllerOAuth2Request): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/utils/oauth2callback`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Utils_OAuth2GetUserByTokenInfo
     * @param req The Internal API
     * @return The full HTTP response as Observable
     */
    public Utils_OAuth2GetUserByTokenInfo(req: API2ControllersUtilsControllerOAuth2GoogleTokenInfoReq): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/utils/oauth2/google/tokeninfo`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('post', uri, headers, params, JSON.stringify(req));
    }

    /**
     * Method Utils_InitializeFeaturedCollections
     * @return The full HTTP response as Observable
     */
    public Utils_InitializeFeaturedCollections(): Observable<HttpResponse<SystemObject>> {
        let uri = `/utils/initializefeaturedcollections`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method Utils_Changes
     * @param pg The page
     * @param rpp The results per page (default 25)
     * @param sinceEventId The Internal API
     * @return The full HTTP response as Observable
     */
    public Utils_Changes(pg: number, rpp: number, sinceEventId: string): Observable<HttpResponse<BigOvenModelAPIChangeLogEvent[]>> {
        let uri = `/utils/changes`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        if (sinceEventId) {
            params = params.set('sinceEventId', sinceEventId + '');
        }
        return this.sendRequest<BigOvenModelAPIChangeLogEvent[]>('get', uri, headers, params, null);
    }

    /**
     * Method Utils_OAuth2CallbackFB
     * @param data The
     * @return The full HTTP response as Observable
     */
    public Utils_OAuth2CallbackFB2(data: API2ControllersUtilsControllerOauth2PutFBReq): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/utils/oauth2callbackfb`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('put', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Utils_OAuth2CallbackFB
     * @param data The Internal API
     * @return The full HTTP response as Observable
     */
    public Utils_OAuth2CallbackFB(data: API2ControllersUtilsControllerOauth2FBReq): Observable<HttpResponse<BigOvenModelAPIUser>> {
        let uri = `/utils/oauth2callbackfb`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<BigOvenModelAPIUser>('post', uri, headers, params, JSON.stringify(data));
    }

    /**
     * Method Utils_InvalidateRecentRavesCache
     * @return The full HTTP response as Observable
     */
    public Utils_InvalidateRecentRavesCache(): Observable<HttpResponse<SystemObject>> {
        let uri = `/utils/invalidate/recentraves`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<SystemObject>('get', uri, headers, params, null);
    }

    /**
     * Method Utils_ConfigCuisines
     * @return The full HTTP response as Observable
     */
    public Utils_ConfigCuisines(): Observable<HttpResponse<string[]>> {
        let uri = `/utils/config/cuisines`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        return this.sendRequest<string[]>('get', uri, headers, params, null);
    }

    /**
     * Method Utils_ConfigIngredients
     * @param pg The Internal API
     * @param rpp The Internal API
     * @return The full HTTP response as Observable
     */
    public Utils_ConfigIngredients(pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIIngredientInfo[]>> {
        let uri = `/utils/config/ingredients`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIIngredientInfo[]>('get', uri, headers, params, null);
    }

    /**
     * Method Utils_ConfigHouseholdItems
     * @param pg The Internal API
     * @param rpp The Internal API
     * @return The full HTTP response as Observable
     */
    public Utils_ConfigHouseholdItems(pg: number, rpp: number): Observable<HttpResponse<BigOvenModelAPIIngredientInfo[]>> {
        let uri = `/utils/config/householditems`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        if (pg) {
            params = params.set('pg', pg + '');
        }
        if (rpp) {
            params = params.set('rpp', rpp + '');
        }
        return this.sendRequest<BigOvenModelAPIIngredientInfo[]>('get', uri, headers, params, null);
    }

    public sendRequest<T>(method: string, uri: string, headers: HttpHeaders, params: HttpParams, body: any): Observable<HttpResponse<T>> {

        var jwt = this.cookieService.get("sess");
        let fullHeaders = new HttpHeaders().append("Authorization","Bearer "+jwt).append('Accept', 'application/json').append("X-BigOven-API-Key", "glFUKikehWjLW900etpS564VgIzOWSW5");

        if (uri.indexOf("user/image")<0)
        {
            fullHeaders = fullHeaders.append("Content-Type","application/json");
        }

        if (method === 'get') {
            return this.http.get<T>(this.domain + uri, { headers: fullHeaders, params: params, observe: 'response' });
        } else if (method === 'put') {
            return this.http.put<T>(this.domain + uri, body, { headers: fullHeaders, params: params, observe: 'response' });
        } else if (method === 'post') {
            return this.http.post<T>(this.domain + uri, body, { headers: fullHeaders, params: params, observe: 'response' });
        } else if (method === 'delete') {
            return this.http.delete<T>(this.domain + uri, { headers: fullHeaders, params: params, observe: 'response' });
        } else {
            console.error('Unsupported request: ' + method);
            return Observable.throw('Unsupported request: ' + method);
        }
    }
}
