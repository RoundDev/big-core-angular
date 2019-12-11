import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalIdeasComponent } from './seasonal-ideas.component';

describe('SeasonalIdeasComponent', () => {
  let component: SeasonalIdeasComponent;
  let fixture: ComponentFixture<SeasonalIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonalIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonalIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
