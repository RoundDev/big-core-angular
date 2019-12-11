import { Component, OnInit, Input } from '@angular/core';
import {BigOvenModelAPI2CollectionInfo} from "../../../../output/models";

@Component({
  selector: 'app-ideas-home',
  templateUrl: './ideas-home.component.html',
  styleUrls: ['./ideas-home.component.scss']
})
export class IdeasHomeComponent implements OnInit {
  @Input() collections: BigOvenModelAPI2CollectionInfo[];

  constructor() { }

  ngOnInit() {
  }

}
