import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanhousePage } from './loanhouse.page';

describe('LoanhousePage', () => {
  let component: LoanhousePage;
  let fixture: ComponentFixture<LoanhousePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoanhousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
