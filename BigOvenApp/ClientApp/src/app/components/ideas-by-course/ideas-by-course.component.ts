import { Component, OnInit } from '@angular/core';

export class BigOvenCourseTile {
  public description: string;
  public urlPath: string;
  public photoUrl: string;

  constructor(_desc, _urlPath, _photoUrl)
  {
    this.description= _desc;
    this.urlPath = _urlPath;
    this.photoUrl = _photoUrl;
  }
}

@Component({
  selector: 'app-ideas-by-course',
  templateUrl: './ideas-by-course.component.html',
  styleUrls: ['./ideas-by-course.component.scss']
})
export class IdeasByCourseComponent implements OnInit {

  public courses: BigOvenCourseTile[] =
    [
      new BigOvenCourseTile("Appetizers","/recipes/appetizers","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/fiestacornavocadosalsa-bb22b9.jpg"),
      new BigOvenCourseTile("Bread","/recipes/bread","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/soft-dinner-rolls-44624b.jpg"),
      new BigOvenCourseTile("Breakfast, Brunch","/recipes/breakfast","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/everyday-blueberry-pancakes-3.jpg"),
      new BigOvenCourseTile("Desserts","/recipes/desserts","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/white-chocolate-raspberry-cupc-bd2bf9.jpg"),
      new BigOvenCourseTile("Drinks","/recipes/drinks","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/cranberry-thyme-gin-and-tonic.jpg"),
      new BigOvenCourseTile("Main Dish","/recipes/main-dish","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/kickin-chicken-tacos-2.jpg"),
      new BigOvenCourseTile("Salad","/recipes/salad","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/green-salad-with-pomegranate.jpg"),
      new BigOvenCourseTile("Side Dish","/recipes/side-dish","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/house-of-blues-sweet-potato-hash-2.jpg"),
      new BigOvenCourseTile("Soups, Stews and Chili","/recipes/soups-stews-and-chili","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/vegetable-noodle-soup-d4074c.jpg"),
      new BigOvenCourseTile("Marinades and Sauces","/recipes/marinades-and-sauces","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/ragu-alla-bolognese-145106.jpg")

    ];

  constructor() { }

  ngOnInit() {
  }

}
