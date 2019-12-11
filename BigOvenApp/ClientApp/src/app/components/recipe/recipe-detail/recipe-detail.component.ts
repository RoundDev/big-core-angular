import {Component, Input, OnInit} from '@angular/core';
import {BigOvenModelAPI2Recipe} from "../../../../../output/models";
import {ActivatedRoute} from "@angular/router";
import {ApiClientService} from "../../../../../output/api2";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: BigOvenModelAPI2Recipe;

  recipeId: number;
  title: string;
  private sub: any;
  loading: boolean;

  @Input() metric: boolean = false;
  @Input() resizedTo: number = 0;

  constructor(private route: ActivatedRoute, private apiService: ApiClientService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.title = params["title"];
      this.recipeId = Number(params['recipeId']); // (+) converts string 'id' to a number
      this.getRecipeDetail(this.recipeId);
      // now load recipe detail
    });
  }

  getRecipeDetail(rid)
  {
    var Fraction = require('fractional').Fraction;

    this.loading = true;
    this.apiService.Recipe_Get(rid, false).subscribe( data => {
      this.loading = false;
      this.recipe = data.body;

      this.resizedTo = this.recipe.YieldNumber;


      console.log(this.recipe);

      if (this.recipe!=undefined)
      {
        this.resizedTo = this.recipe.YieldNumber;
      }



      for(var i=0; i<this.recipe.Ingredients.length; i++)
      {
        // fix glosslink
        this.recipe.Ingredients[i].HTMLName =this.recipe.Ingredients[i].HTMLName.replace(/a href=/ig,"span dl=").replace(/<\/a>/ig,"</span>");
      }


      this.route.params.subscribe(params => {
        this.metric = params['metric']=="metric";
        if (params["resize"]!=null)
        {
          this.resizedTo = Number(params['resize']);
          let ratio = this.resizedTo / this.recipe.YieldNumber;

          if (ratio!=1)
          {
            for(var i=0; i<this.recipe.Ingredients.length; i++)
            {
              // resize ingredients
              if (this.resizedTo!=this.recipe.YieldNumber)
              {
                if (!this.recipe.Ingredients[i].IsHeading)
                {
                  this.recipe.Ingredients[i].Quantity = this.recipe.Ingredients[i].Quantity * ratio;

                  var fract = new Fraction(this.recipe.Ingredients[i].Quantity).toString();
                  this.recipe.Ingredients[i].DisplayQuantity = fract;

                  //this.recipe.Ingredients[i].DisplayQuantity = (this.recipe.Ingredients[i].Quantity * ratio).toString();
                  this.recipe.Ingredients[i].MetricQuantity = this.recipe.Ingredients[i].MetricQuantity * ratio;

                }
              }
            }
          }

          console.log(this.recipe.Ingredients);


        }
      });





    });
  }
  // 'background-image': 'url(' + this.recipe.PhotoUrl + '?h=100&w=100&c_scale)',
  setRecipeImage() {
    return {
      // 'background-image': 'url(' + this.recipe.PhotoUrl + ')',
      'background-image': 'url(' + this.recipe.PhotoUrl + '?h=600&c_scale)',
      'width': '100%',
      'height': '100%',
      'background-size': 'contain, cover',
      'background-repeat': 'no-repeat'
    }
  }

}
