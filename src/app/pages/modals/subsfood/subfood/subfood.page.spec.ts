import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubfoodPage } from './subfood.page';

describe('SubfoodPage', () => {
  let component: SubfoodPage;
  let fixture: ComponentFixture<SubfoodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
