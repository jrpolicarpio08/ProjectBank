import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddloansuccessPage } from './addloansuccess.page';

describe('AddloansuccessPage', () => {
  let component: AddloansuccessPage;
  let fixture: ComponentFixture<AddloansuccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddloansuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
