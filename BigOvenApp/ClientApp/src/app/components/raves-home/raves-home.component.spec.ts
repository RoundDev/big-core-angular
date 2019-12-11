import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavesHomeComponent } from './raves-home.component';

describe('RavesHomeComponent', () => {
  let component: RavesHomeComponent;
  let fixture: ComponentFixture<RavesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
