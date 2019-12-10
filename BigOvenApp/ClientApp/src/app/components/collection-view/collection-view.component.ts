import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ApiClientService } from '../../../output/api2';
// import {BigOvenModelAPI2RecipeSearchResult, BigOvenModelAPI2CollectionInfo} from '../../../output/models';
// import { RecipeSearchService } from '../../shared/recipesearch.service';
// import { GlobalEventsManager } from '../../shared/globaleventsmanager';
import {RecipeSearchService} from "../../shared/services/recipeSearch.service";
import {ApiClientService} from "../../../../output/api2";
import {BigOvenModelAPI2CollectionInfo, BigOvenModelAPI2RecipeSearchResult} from "../../../../output/models";
import {GlobalEventsManager} from "../../shared/globaleventsmanager";

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.scss']
})
export class CollectionViewComponent implements OnInit {

  private collectionId?: number;
  private title: string = null;

  public recipeID: any[];
  public currentPage:number = 1;
  public itemsPerPage:number = 20;
  collection: BigOvenModelAPI2RecipeSearchResult = null;
  // recipe: BigOvenModelAPI2Recipe = null;
  private collectionMetaData: BigOvenModelAPI2CollectionInfo;
  public category: string;
  public subcategory: string;
  public categoryInt: number;
  public subcategoryInt: number;

  private recipeResults: BigOvenModelAPI2RecipeSearchResult;


  constructor(private route:ActivatedRoute,
              private router: Router,
              private apiClientService : ApiClientService,
              private recipeSearch: RecipeSearchService,
              private globalEventsManager: GlobalEventsManager) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.currentPage = parseInt(params['page']) || 1;
        this.collectionId = parseInt(params['collId']);
        this.title = params['title'];

        if (params['subcategory'])
        {
          this.subcategory = params['subcategory'];
          this.subcategoryInt = this.globalEventsManager.getIndexFromSubcategorySlug(this.subcategory);

          // special search. it's a desserts, etc. search.
          // so do it, by setting the subcategory value, which will trigger component
        }
        if (params['category']) {
          this.category = params['category'];
          // special search. it's a desserts, etc. search.
          // view will show top level browser
        }

        // fetch it
        if ((this.collectionId>0))
        {

          this.getCollectionById(this.collectionId, this.currentPage, this.itemsPerPage);
          this.getCollectionMetaData(this.collectionId);

          // this.getRecipes(this.collectionId, this.currentPage, this.itemsPerPage);
          console.log(this.currentPage);
          console.log(this.collectionId);
          console.log(this.title);
          // this.collectionArray = this.collection.Results;
          // let arrayJSON = JSON.stringify(this.recipe) ;
          // console.log("recipe JSON" + " " + arrayJSON);


        }

      }
    );

  }

  getCollectionMetaData(collId)
  {
    this.apiClientService.Collection_GetCollectionMeta(collId).subscribe(data=>{
      this.collectionMetaData = data.body;
      // let arrayJSON = JSON.stringify(this.collectionMetaData) ;
      //
      // console.log("collectionMetaData JSON" + " " + arrayJSON);
      // console.log(this.collectionMetaData);
    });
  }

  getCollectionById(collId, _page, _rpp)
  {
    this.apiClientService.Collection_GetCollection(collId, _rpp, _page, false, null).subscribe(data=>{
      this.collection = data.body;
      // let keys = Object.keys(this.collection);
      // console.log("Keys" + " " + keys);
      // for(var i=0; i < keys.length; i++) {
      //     var listOfKeys = keys[i];
      //     for(var j = 0; j < listOfKeys.length; j++) {
      //         console.log("ListOf Keys" + " " + listOfKeys);
      //         var results = listOfKeys[j];
      //         for(var z = 0; z < results.length; z++) {
      //             console.log("results" + " " + results);
      //         }
      //     }
      // }
      // keys.forEach(function (elem) {
      //     console.log("Elem" + " " + elem)
      // })
      // let arrayJSON = JSON.stringify(this.collection) ;

      // console.log("collection JSON" + " " + arrayJSON);
      // console.log(this.collection);
    });
  }
  // getRecipes() {
  // this.apiClientService.Recipe_Get().subscribe(data=>{
  //    this.collection = data.body;
  // this.collection.Results.forEach(function (elem) {
  //     console.log("Elem" + " " + elem)
  // });
  // var list = Object.keys(this.collection.Results).map((key)=>{return this.collection.Results[key]});
  // console.log("List" + " " + list);

  // let arrayJSON = JSON.stringify(this.collection);
  // for(var i=0; i < this.collection.Results.length; i++) {
  //     var resultsList = this.collection.Results[i];
  //     for(var j = 0; j < resultsList.RecipeID; j++) {
  //         var recipeList = resultsList[j];
  //         console.log("RecipeList" + " " + recipeList );
  //         this.recipeID = recipeList;
  //         // for(var z = 0; z < recipeList.length; z++) {
  //         // }
  //     }

  // }
  // let arrayScript = JSON.parse(arrayJSON);
  // let JSONarray = JSON.stringify(arrayScript) ;
  // console.log("collection JSON" + " " + JSONarray);

  // });
  // })

  // }




  pageChanged(event)
  {
    let newPageNo=event.page;

    if (newPageNo===1)
    {
      this.router.navigate(['recipe-ideas',this.title,this.collectionId]);
    } else
    {
      this.router.navigate(['recipe-ideas',this.title,this.collectionId,'page', newPageNo]);
    }
  }
  ngAfterViewInit() {
    // this.getRecipes(this.collectionId, this.currentPage, this.itemsPerPage);
  }

}
