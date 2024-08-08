import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferconfirmPage } from './transferconfirm.page';

describe('TransferconfirmPage', () => {
  let component: TransferconfirmPage;
  let fixture: ComponentFixture<TransferconfirmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransferconfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
