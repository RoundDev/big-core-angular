import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEnsureLoginComponent } from './account-ensure-login.component';

describe('AccountEnsureLoginComponent', () => {
  let component: AccountEnsureLoginComponent;
  let fixture: ComponentFixture<AccountEnsureLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountEnsureLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEnsureLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
