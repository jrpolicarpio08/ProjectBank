import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanbusinessPage } from './loanbusiness.page';

describe('LoanbusinessPage', () => {
  let component: LoanbusinessPage;
  let fixture: ComponentFixture<LoanbusinessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoanbusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
