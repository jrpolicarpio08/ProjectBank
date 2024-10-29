import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddsubscriptionsPage } from './addsubscriptions.page';

describe('AddsubscriptionsPage', () => {
  let component: AddsubscriptionsPage;
  let fixture: ComponentFixture<AddsubscriptionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddsubscriptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
