import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillsaddPage } from './billsadd.page';

describe('BillsaddPage', () => {
  let component: BillsaddPage;
  let fixture: ComponentFixture<BillsaddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillsaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
