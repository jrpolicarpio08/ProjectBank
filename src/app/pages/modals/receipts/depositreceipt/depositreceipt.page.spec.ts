import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepositreceiptPage } from './depositreceipt.page';

describe('DepositreceiptPage', () => {
  let component: DepositreceiptPage;
  let fixture: ComponentFixture<DepositreceiptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DepositreceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
