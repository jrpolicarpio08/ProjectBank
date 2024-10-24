import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddbillsPage } from './addbills.page';

describe('AddbillsPage', () => {
  let component: AddbillsPage;
  let fixture: ComponentFixture<AddbillsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddbillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
