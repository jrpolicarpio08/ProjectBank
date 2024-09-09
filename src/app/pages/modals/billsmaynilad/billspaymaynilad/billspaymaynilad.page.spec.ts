import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillspaymayniladPage } from './billspaymaynilad.page';

describe('BillspaymayniladPage', () => {
  let component: BillspaymayniladPage;
  let fixture: ComponentFixture<BillspaymayniladPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillspaymayniladPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
