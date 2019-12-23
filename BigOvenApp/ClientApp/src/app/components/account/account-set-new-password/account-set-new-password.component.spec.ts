import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetNewPasswordComponent } from './account-set-new-password.component';

describe('AccountSetNewPasswordComponent', () => {
  let component: AccountSetNewPasswordComponent;
  let fixture: ComponentFixture<AccountSetNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSetNewPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
