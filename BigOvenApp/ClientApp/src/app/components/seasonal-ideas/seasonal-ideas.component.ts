import {Component, Input, OnInit} from '@angular/core';
import {BigOvenModelAPI2CollectionInfo} from "../../../../output/models";

@Component({
  selector: 'app-seasonal-ideas',
  templateUrl: './seasonal-ideas.component.html',
  styleUrls: ['./seasonal-ideas.component.scss']
})
export class SeasonalIdeasComponent implements OnInit {

  @Input()
  collections: BigOvenModelAPI2CollectionInfo[];

  constructor() { }

  ngOnInit() {
  }

}
