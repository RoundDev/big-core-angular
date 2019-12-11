import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailReviewBoxComponent } from './recipe-detail-review-box.component';

describe('RecipeDetailReviewBoxComponent', () => {
  let component: RecipeDetailReviewBoxComponent;
  let fixture: ComponentFixture<RecipeDetailReviewBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailReviewBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailReviewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
