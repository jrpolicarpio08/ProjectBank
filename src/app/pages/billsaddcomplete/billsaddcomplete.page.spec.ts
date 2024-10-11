import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillsaddcompletePage } from './billsaddcomplete.page';

describe('BillsaddcompletePage', () => {
  let component: BillsaddcompletePage;
  let fixture: ComponentFixture<BillsaddcompletePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillsaddcompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
