import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvergepaidPage } from './convergepaid.page';

describe('ConvergepaidPage', () => {
  let component: ConvergepaidPage;
  let fixture: ComponentFixture<ConvergepaidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConvergepaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
