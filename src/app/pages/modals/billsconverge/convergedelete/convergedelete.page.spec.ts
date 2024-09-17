import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvergedeletePage } from './convergedelete.page';

describe('ConvergedeletePage', () => {
  let component: ConvergedeletePage;
  let fixture: ComponentFixture<ConvergedeletePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConvergedeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
