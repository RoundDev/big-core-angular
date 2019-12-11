import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchviewComponent } from './recipe-searchview.component';

describe('RecipeSearchviewComponent', () => {
  let component: RecipeSearchviewComponent;
  let fixture: ComponentFixture<RecipeSearchviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSearchviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
