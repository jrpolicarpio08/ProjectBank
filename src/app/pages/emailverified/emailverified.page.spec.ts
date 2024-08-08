import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailverifiedPage } from './emailverified.page';

describe('EmailverifiedPage', () => {
  let component: EmailverifiedPage;
  let fixture: ComponentFixture<EmailverifiedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmailverifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
