import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanhouseverifyPage } from './loanhouseverify.page';

describe('LoanhouseverifyPage', () => {
  let component: LoanhouseverifyPage;
  let fixture: ComponentFixture<LoanhouseverifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoanhouseverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
