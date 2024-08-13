import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepositverifyPage } from './depositverify.page';

describe('DepositverifyPage', () => {
  let component: DepositverifyPage;
  let fixture: ComponentFixture<DepositverifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DepositverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
