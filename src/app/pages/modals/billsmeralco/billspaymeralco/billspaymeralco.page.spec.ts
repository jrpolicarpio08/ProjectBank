import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillspaymeralcoPage } from './billspaymeralco.page';

describe('BillspaymeralcoPage', () => {
  let component: BillspaymeralcoPage;
  let fixture: ComponentFixture<BillspaymeralcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillspaymeralcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
