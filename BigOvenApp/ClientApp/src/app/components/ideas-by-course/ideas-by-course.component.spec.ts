import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasByCourseComponent } from './ideas-by-course.component';

describe('IdeasByCourseComponent', () => {
  let component: IdeasByCourseComponent;
  let fixture: ComponentFixture<IdeasByCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasByCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasByCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
