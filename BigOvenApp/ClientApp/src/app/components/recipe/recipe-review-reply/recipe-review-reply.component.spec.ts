import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeReviewReplyComponent } from './recipe-review-reply.component';

describe('RecipeReviewReplyComponent', () => {
  let component: RecipeReviewReplyComponent;
  let fixture: ComponentFixture<RecipeReviewReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeReviewReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeReviewReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
