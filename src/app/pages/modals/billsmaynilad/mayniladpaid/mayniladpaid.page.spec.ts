import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MayniladpaidPage } from './mayniladpaid.page';

describe('MayniladpaidPage', () => {
  let component: MayniladpaidPage;
  let fixture: ComponentFixture<MayniladpaidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MayniladpaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
