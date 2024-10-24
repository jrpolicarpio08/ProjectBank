import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanbusinesspaidPage } from './loanbusinesspaid.page';

describe('LoanbusinesspaidPage', () => {
  let component: LoanbusinesspaidPage;
  let fixture: ComponentFixture<LoanbusinesspaidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoanbusinesspaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
