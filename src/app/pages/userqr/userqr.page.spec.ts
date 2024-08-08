import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserqrPage } from './userqr.page';

describe('UserqrPage', () => {
  let component: UserqrPage;
  let fixture: ComponentFixture<UserqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
