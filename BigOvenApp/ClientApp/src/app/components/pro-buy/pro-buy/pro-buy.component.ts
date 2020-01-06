import { Component, OnInit } from '@angular/core';
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";

@Component({
  selector: 'app-pro-buy',
  templateUrl: './pro-buy.component.html',
  styleUrls: ['./pro-buy.component.scss']
})
export class ProBuyComponent implements OnInit {

  isPro: boolean = false;
  constructor(public bigovenAuthService: BigOvenAuthService) {
    this.isPro = bigovenAuthService.isPro();
  }

  ngOnInit() {
  }

}
