import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvergeverifyPage } from './convergeverify.page';

describe('ConvergeverifyPage', () => {
  let component: ConvergeverifyPage;
  let fixture: ComponentFixture<ConvergeverifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConvergeverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
