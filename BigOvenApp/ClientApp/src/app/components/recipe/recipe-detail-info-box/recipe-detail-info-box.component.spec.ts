import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailInfoBoxComponent } from './recipe-detail-info-box.component';

describe('RecipeDetailInfoBoxComponent', () => {
  let component: RecipeDetailInfoBoxComponent;
  let fixture: ComponentFixture<RecipeDetailInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
