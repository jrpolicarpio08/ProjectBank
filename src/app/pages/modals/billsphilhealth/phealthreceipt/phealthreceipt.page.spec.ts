import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhealthreceiptPage } from './phealthreceipt.page';

describe('PhealthreceiptPage', () => {
  let component: PhealthreceiptPage;
  let fixture: ComponentFixture<PhealthreceiptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhealthreceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
