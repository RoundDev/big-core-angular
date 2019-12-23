import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMeComponent } from './account-me.component';

describe('AccountMeComponent', () => {
  let component: AccountMeComponent;
  let fixture: ComponentFixture<AccountMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
