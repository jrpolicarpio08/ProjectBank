import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanreceiptPage } from './loanreceipt.page';

describe('LoanreceiptPage', () => {
  let component: LoanreceiptPage;
  let fixture: ComponentFixture<LoanreceiptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoanreceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
