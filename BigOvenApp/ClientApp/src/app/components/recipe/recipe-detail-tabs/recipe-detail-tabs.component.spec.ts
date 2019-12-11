import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailTabsComponent } from './recipe-detail-tabs.component';

describe('RecipeDetailTabsComponent', () => {
  let component: RecipeDetailTabsComponent;
  let fixture: ComponentFixture<RecipeDetailTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
