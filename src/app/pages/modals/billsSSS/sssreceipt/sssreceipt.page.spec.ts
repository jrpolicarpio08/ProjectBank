import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SssreceiptPage } from './sssreceipt.page';

describe('SssreceiptPage', () => {
  let component: SssreceiptPage;
  let fixture: ComponentFixture<SssreceiptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SssreceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
