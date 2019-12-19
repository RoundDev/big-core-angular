import { Component, OnInit } from '@angular/core';
import {faFacebook, faYoutube, faPinterest} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-social-media-share',
  templateUrl: './social-media-share.component.html',
  styleUrls: ['./social-media-share.component.scss']
})
export class SocialMediaShareComponent implements OnInit {

  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faPinterest = faPinterest;
  constructor() { }

  ngOnInit() {
  }

}
