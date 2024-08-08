import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountlimitsPage } from './accountlimits.page';

describe('AccountlimitsPage', () => {
  let component: AccountlimitsPage;
  let fixture: ComponentFixture<AccountlimitsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccountlimitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
