import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferreceiptPage } from './transferreceipt.page';

describe('TransferreceiptPage', () => {
  let component: TransferreceiptPage;
  let fixture: ComponentFixture<TransferreceiptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransferreceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
