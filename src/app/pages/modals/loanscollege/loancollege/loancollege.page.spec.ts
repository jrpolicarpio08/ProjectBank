import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoancollegePage } from './loancollege.page';

describe('LoancollegePage', () => {
  let component: LoancollegePage;
  let fixture: ComponentFixture<LoancollegePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoancollegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
