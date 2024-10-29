import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubfoodverifyPage } from './subfoodverify.page';

describe('SubfoodverifyPage', () => {
  let component: SubfoodverifyPage;
  let fixture: ComponentFixture<SubfoodverifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubfoodverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
