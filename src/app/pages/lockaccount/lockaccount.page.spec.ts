import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LockaccountPage } from './lockaccount.page';

describe('LockaccountPage', () => {
  let component: LockaccountPage;
  let fixture: ComponentFixture<LockaccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LockaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
