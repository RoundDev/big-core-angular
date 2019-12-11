import {EventEmitter, Injectable} from '@angular/core';
import {ApiClientService} from "../../../../output/api2";
import {
  API2ControllersGroceryListControllerPostGroceryListSyncRequest,
  BigOvenModelAPI2GroceryList, BigOvenModelAPIGroceryGroceryList,
  BigOvenModelAPIGroceryItem, BigOvenModelAPIIngredient,
  BigOvenModelShoppingListLine
} from "../../../../output/models";

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  grocerylist: BigOvenModelAPI2GroceryList = null;
  groceryline: BigOvenModelShoppingListLine = null;

  private onGroceryListComplete: EventEmitter<BigOvenModelAPI2GroceryList> = new EventEmitter<BigOvenModelAPI2GroceryList>();
  private onGroceryLineAdded: EventEmitter<BigOvenModelShoppingListLine> = new EventEmitter<BigOvenModelShoppingListLine>();
  private onGroceryLineUpdated: EventEmitter<BigOvenModelAPIGroceryItem> = new EventEmitter<BigOvenModelAPIGroceryItem>();

  constructor(private apiService:ApiClientService) { }

  public getOnGrocerylistCompleteEmitter()
  {
    return this.onGroceryListComplete;
  }

  public getOnGroceryLineAddedEmitter()
  {
    return this.onGroceryLineAdded;
  }

  getGrocerylist() {
    this.apiService.GroceryList_Get()
      .subscribe( data => {
        this.grocerylist = data.body;
        this.onGroceryListComplete.emit(this.grocerylist);
      });
  }


  addLinesToGrocerylist(ingredients: BigOvenModelAPIIngredient[], recipeId?:number )
  {
    var lines: BigOvenModelAPIGroceryItem[] = [];

    var items: BigOvenModelAPIGroceryItem[] = [];

    for(var i=0; i<ingredients.length; i++)
    {
      var line: BigOvenModelAPIGroceryItem = {
        ItemID: ingredients[i].IngredientID,
        GUID: null,
        RecipeID: recipeId,
        Name: ingredients[i].Name,
        Notes: ingredients[i].PreparationNotes,
        DisplayQuantity: ingredients[i].DisplayQuantity,
        Department:null,
        CreationDate: null,
        IsChecked:false,
        LocalStatus: "ADDED",
        LastModified:null,
        BigOvenObject:null,
        ThirdPartyURL:null
      };
      lines.push(line);

    }
    var list : BigOvenModelAPIGroceryGroceryList = {
      LastModified :new Date().toString(),
      VersionGuid : null,
      Items: lines,
      Recipes: []
    }


    var syncObj: API2ControllersGroceryListControllerPostGroceryListSyncRequest = {
      since: null,
      list: list
    };

    console.log(syncObj);

    this.apiService.GroceryList_PostGroceryListSync(syncObj).subscribe(data=>{
      console.log("sync finished");
      console.log(data);
    });


  }

  addText(addText: string)
  {
    console.log("adding "+addText);

    this.apiService.GroceryList_Post({text:addText})
      .subscribe( data => {
        this.groceryline = data.body;
        console.log(data.body);
        this.onGroceryLineAdded.emit(this.groceryline);
      });

  }

  updateItemByGuid(item: BigOvenModelAPIGroceryItem)
  {
    console.log("Update item ");
    console.log(item);

    console.log(item.Name);
    console.log(item.Notes);


    this.apiService.GroceryList_GroceryListItemGuid({
      guid: item.GUID,
      name: item.Name,
      quantity: item.DisplayQuantity,
      unit: null,
      notes: item.Notes,
      ischecked: item.IsChecked,
      department: item.Department
    }, item.GUID)
      .subscribe( data => {
        console.log(data.body);
        this.onGroceryLineUpdated.emit(item);
      });

  }

  removeMarkedItems()
  {
    this.apiService.GroceryList_GroceryListRemoveMarkedItems()
      .subscribe( data => {
        this.grocerylist = data.body;
        this.onGroceryListComplete.emit(this.grocerylist);

        //console.log(data.body);
        //this.onGroceryLineUpdated.emit(item);
        //this.getGrocerylist();
      });

  }

}
