import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBuyComponent } from './pro-buy.component';

describe('ProBuyComponent', () => {
  let component: ProBuyComponent;
  let fixture: ComponentFixture<ProBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
