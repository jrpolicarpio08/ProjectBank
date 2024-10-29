import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmusicremovedPage } from './submusicremoved.page';

describe('SubmusicremovedPage', () => {
  let component: SubmusicremovedPage;
  let fixture: ComponentFixture<SubmusicremovedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubmusicremovedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
