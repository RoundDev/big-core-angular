import {Component, Input, OnInit} from '@angular/core';
import {BigOvenCourseTile} from "../../ideas-by-course/ideas-by-course.component";

@Component({
  selector: 'app-recipe-course-tile',
  templateUrl: './recipe-course-tile.component.html',
  styleUrls: ['./recipe-course-tile.component.scss']
})
export class RecipeCourseTileComponent implements OnInit {

  @Input()
  course: BigOvenCourseTile;

  constructor() { }

  ngOnInit() {
  }

}
