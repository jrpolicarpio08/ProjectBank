import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubvideoremovedPage } from './subvideoremoved.page';

describe('SubvideoremovedPage', () => {
  let component: SubvideoremovedPage;
  let fixture: ComponentFixture<SubvideoremovedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubvideoremovedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
