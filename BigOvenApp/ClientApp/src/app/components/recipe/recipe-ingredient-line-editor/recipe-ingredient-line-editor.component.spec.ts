import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientLineEditorComponent } from './recipe-ingredient-line-editor.component';

describe('RecipeIngredientLineEditorComponent', () => {
  let component: RecipeIngredientLineEditorComponent;
  let fixture: ComponentFixture<RecipeIngredientLineEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIngredientLineEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientLineEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
