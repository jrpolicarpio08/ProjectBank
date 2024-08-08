import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainmenuPage } from './mainmenu.page';

describe('MainmenuPage', () => {
  let component: MainmenuPage;
  let fixture: ComponentFixture<MainmenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
