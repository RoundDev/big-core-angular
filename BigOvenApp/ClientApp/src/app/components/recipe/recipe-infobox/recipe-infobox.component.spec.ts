import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInfoboxComponent } from './recipe-infobox.component';

describe('RecipeInfoboxComponent', () => {
  let component: RecipeInfoboxComponent;
  let fixture: ComponentFixture<RecipeInfoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeInfoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeInfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
