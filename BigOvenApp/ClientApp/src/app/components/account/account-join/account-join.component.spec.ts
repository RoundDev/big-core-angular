import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountJoinComponent } from './account-join.component';

describe('AccountJoinComponent', () => {
  let component: AccountJoinComponent;
  let fixture: ComponentFixture<AccountJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
