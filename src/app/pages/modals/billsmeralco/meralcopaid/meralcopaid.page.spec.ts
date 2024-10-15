import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeralcopaidPage } from './meralcopaid.page';

describe('MeralcopaidPage', () => {
  let component: MeralcopaidPage;
  let fixture: ComponentFixture<MeralcopaidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeralcopaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
