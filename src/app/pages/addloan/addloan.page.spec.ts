import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddloanPage } from './addloan.page';

describe('AddloanPage', () => {
  let component: AddloanPage;
  let fixture: ComponentFixture<AddloanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddloanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
