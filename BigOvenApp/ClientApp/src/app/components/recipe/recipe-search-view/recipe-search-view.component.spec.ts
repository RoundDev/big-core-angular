import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchViewComponent } from './recipe-search-view.component';

describe('RecipeSearchViewComponent', () => {
  let component: RecipeSearchViewComponent;
  let fixture: ComponentFixture<RecipeSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
