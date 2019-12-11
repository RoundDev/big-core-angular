import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeNudgeComponent } from './upgrade-nudge.component';

describe('UpgradeNudgeComponent', () => {
  let component: UpgradeNudgeComponent;
  let fixture: ComponentFixture<UpgradeNudgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeNudgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeNudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
