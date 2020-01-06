import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNutritionBoxComponent } from './recipe-nutrition-box.component';

describe('RecipeNutritionBoxComponent', () => {
  let component: RecipeNutritionBoxComponent;
  let fixture: ComponentFixture<RecipeNutritionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeNutritionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNutritionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
