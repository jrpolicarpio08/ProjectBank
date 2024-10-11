import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoancarPage } from './loancar.page';

describe('LoancarPage', () => {
  let component: LoancarPage;
  let fixture: ComponentFixture<LoancarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoancarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
