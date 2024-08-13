import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepositscanPage } from './depositscan.page';

describe('DepositscanPage', () => {
  let component: DepositscanPage;
  let fixture: ComponentFixture<DepositscanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DepositscanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
