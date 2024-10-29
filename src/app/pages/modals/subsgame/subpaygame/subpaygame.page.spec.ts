import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubpaygamePage } from './subpaygame.page';

describe('SubpaygamePage', () => {
  let component: SubpaygamePage;
  let fixture: ComponentFixture<SubpaygamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubpaygamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
