import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepositconfirmPage } from './depositconfirm.page';

describe('DepositconfirmPage', () => {
  let component: DepositconfirmPage;
  let fixture: ComponentFixture<DepositconfirmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DepositconfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
