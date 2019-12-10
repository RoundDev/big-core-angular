import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasHomeComponent } from './ideas-home.component';

describe('IdeasHomeComponent', () => {
  let component: IdeasHomeComponent;
  let fixture: ComponentFixture<IdeasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
