import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubfoodremovedPage } from './subfoodremoved.page';

describe('SubfoodremovedPage', () => {
  let component: SubfoodremovedPage;
  let fixture: ComponentFixture<SubfoodremovedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubfoodremovedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
