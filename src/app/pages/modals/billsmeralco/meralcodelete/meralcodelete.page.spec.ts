import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeralcodeletePage } from './meralcodelete.page';

describe('MeralcodeletePage', () => {
  let component: MeralcodeletePage;
  let fixture: ComponentFixture<MeralcodeletePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeralcodeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
