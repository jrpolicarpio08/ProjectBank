import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubpayfoodPage } from './subpayfood.page';

describe('SubpayfoodPage', () => {
  let component: SubpayfoodPage;
  let fixture: ComponentFixture<SubpayfoodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubpayfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
