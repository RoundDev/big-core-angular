import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCategoryChooserComponent } from './recipe-category-chooser.component';

describe('RecipeCategoryChooserComponent', () => {
  let component: RecipeCategoryChooserComponent;
  let fixture: ComponentFixture<RecipeCategoryChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCategoryChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCategoryChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
