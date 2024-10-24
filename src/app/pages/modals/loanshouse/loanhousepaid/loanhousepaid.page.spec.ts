import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanhousepaidPage } from './loanhousepaid.page';

describe('LoanhousepaidPage', () => {
  let component: LoanhousepaidPage;
  let fixture: ComponentFixture<LoanhousepaidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoanhousepaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
