import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class GlobalEventsManager {

  private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();
  // need this to reverse engineer index
  public categoriesAll = ["",
    "appetizers",
    "bread",
    "breakfast",
    "desserts",
    "drinks",
    "main-dish",
    "salad",
    "side-dish",
    "soups-stews-and-chili",
    "marinades-and-sauces",
    "other",
    "antipasto",
    "grilled",
    "seafood",
    "wraps-and-rolls",
    "beans-and-legumes",
    "canapes-and-bruschetta",
    "cheese",
    "deviled-eggs",
    "dips-and-spreads",
    "fruit",
    "meat",
    "mushrooms",
    "nuts-and-seeds",
    "olives",
    "pastries",
    "pickles",
    "snacks-for-kids",
    "spicy",
    "vegetable",
    "appetizers---other",
    "bread-machine",
    "non-bread-machine",
    "breakfast-pastries",
    "holiday-bread",
    "quick-bread",
    "banana-bread",
    "biscuits-and-scones",
    "cornbread",
    "fruit-bread",
    "muffins",
    "popovers-and-yorkshire-puddings",
    "pumpkin-bread",
    "zucchini-bread",
    "yeast-bread",
    "bagels",
    "challah",
    "flat-bread",
    "rolls-and-buns",
    "rye-bread",
    "sourdough-and-starters",
    "white-bread",
    "whole-grain-bread",
    "tortillas",
    "breads---other",
    "baked-goods",
    "beverages",
    "casseroles",
    "cereals",
    "condiments",
    "fruit",
    "meat-and-seafood",
    "potatoes",
    "quiches",
    "sandwiches-and-wraps",
    "crepes",
    "egg-dishes",
    "french-toast",
    "pancakes",
    "vegetarian",
    "waffles",
    "other-breakfast-brunch",
    "cakes",
    "candies",
    "chocolate",
    "cobblers",
    "cookies-and-bars",
    "custards-and-puddings",
    "dessert-gelatins",
    "pies",
    "dessert-sauces",
    "frozen-treats",
    "fruit-crisps",
    "fruit-crumbles",
    "liqueur-flavored-desserts",
    "meringues",
    "mousse",
    "tiramisu",
    "trifles",
    "desserts---other",
    "beer",
    "chocolate",
    "cider",
    "cocktails",
    "coffee",
    "eggnog",
    "liqueurs",
    "hot-chocolate",
    "kahlua",
    "lemonade",
    "mocktails",
    "punch",
    "sangria",
    "shakes-and-floats",
    "smoothies",
    "tea",
    "beverages---other",
    "burgers",
    "casseroles",
    "deep-fried",
    "fish-and-shellfish",
    "salads",
    "meatless",
    "meatloaf",
    "pesto",
    "pizza-and-calzones",
    "quiche-and-savory-pies",
    "ribs",
    "roasts",
    "sandwiches-and-wraps",
    "slow-cooker",
    "meat---steaks-and-chops",
    "stir-fries",
    "stuffed-peppers",
    "tacos-burritos-and-enchiladas",
    "grill-and-bbq",
    "main-dish---other",
    "bean",
    "coleslaw",
    "croutons-and-toppings",
    "dessert-and-gelatin",
    "dressings-and-vinaigrettes",
    "egg-salads",
    "fruit-salads",
    "grains",
    "green-salads",
    "meat-and-seafood",
    "pasta-salads",
    "potato-salads",
    "vegetable-salads",
    "salads---other",
    "beans-and-peas",
    "dumplings",
    "french-fries",
    "grains",
    "potatoes",
    "rice",
    "sauces",
    "casseroles",
    "vegetables",
    "seafood",
    "side-dish---other",
    "beans-and-legumes",
    "broth-stocks",
    "chili",
    "chili-without-beans",
    "chowders",
    "cream-style-soups",
    "cheese-soups",
    "dessert-soups",
    "dry-soup-mixes",
    "meat-and-poultry",
    "noodle-soups",
    "seafood-non-chowder",
    "slow-cooker-soups",
    "stews",
    "vegetable",
    "vegetarian",
    "soups-and-stews---other",
    "marinade",
    "other---misc",
    "sauce",
    "poultry---chicken",
    "poultry---turkey",
    "poultry---other",
    "wild-game",
    "pasta",
    "meat---other"
  ]

  constructor() {}

  showNavBar(ifShow: boolean) {
    this._showNavBar.next(ifShow);
  }

  public getIndexFromSubcategorySlug(slug)
  {
    return this.categoriesAll.findIndex(x=>x==slug);
  }




}
