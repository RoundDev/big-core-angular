import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCourseTileComponent } from './recipe-course-tile.component';

describe('RecipeCourseTileComponent', () => {
  let component: RecipeCourseTileComponent;
  let fixture: ComponentFixture<RecipeCourseTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCourseTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCourseTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
