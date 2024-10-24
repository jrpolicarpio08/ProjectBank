import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanbusinessverifyPage } from './loanbusinessverify.page';

describe('LoanbusinessverifyPage', () => {
  let component: LoanbusinessverifyPage;
  let fixture: ComponentFixture<LoanbusinessverifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoanbusinessverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
