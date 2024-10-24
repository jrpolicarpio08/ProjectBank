import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddbillsuccessPage } from './addbillsuccess.page';

describe('AddbillsuccessPage', () => {
  let component: AddbillsuccessPage;
  let fixture: ComponentFixture<AddbillsuccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddbillsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
