import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeralcoverifyPage } from './meralcoverify.page';

describe('MeralcoverifyPage', () => {
  let component: MeralcoverifyPage;
  let fixture: ComponentFixture<MeralcoverifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeralcoverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
