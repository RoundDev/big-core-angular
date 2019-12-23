import {Component, Input, OnInit} from '@angular/core';
import {BigOvenModelAPIReply, BigOvenModelAPIReview} from "../../../../../output/models";
import {RecipeSearchService} from "../../../shared/services/recipeSearch.service";

@Component({
  selector: 'app-recipe-review-reply',
  templateUrl: './recipe-review-reply.component.html',
  styleUrls: ['./recipe-review-reply.component.scss']
})
export class RecipeReviewReplyComponent implements OnInit {

  public isReadOnly: boolean = true;
  @Input()
  review: BigOvenModelAPIReview;
  replies: BigOvenModelAPIReply[] = [];

  constructor(private recipesearchService: RecipeSearchService) {
  }

  ngOnInit() {
  }

  showReplies(guid) {
    this.recipesearchService.getReplies(guid, 1, 50).subscribe(data => {
      this.replies = data.body;

    });
  }

}
