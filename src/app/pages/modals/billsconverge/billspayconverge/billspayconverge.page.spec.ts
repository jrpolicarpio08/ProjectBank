import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillspayconvergePage } from './billspayconverge.page';

describe('BillspayconvergePage', () => {
  let component: BillspayconvergePage;
  let fixture: ComponentFixture<BillspayconvergePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillspayconvergePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
