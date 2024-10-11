import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcardsuccessPage } from './addcardsuccess.page';

describe('AddcardsuccessPage', () => {
  let component: AddcardsuccessPage;
  let fixture: ComponentFixture<AddcardsuccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddcardsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
