import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubreceiptPage } from './subreceipt.page';

describe('SubreceiptPage', () => {
  let component: SubreceiptPage;
  let fixture: ComponentFixture<SubreceiptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubreceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
