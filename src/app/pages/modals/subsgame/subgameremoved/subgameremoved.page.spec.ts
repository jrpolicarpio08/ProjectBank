import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubgameremovedPage } from './subgameremoved.page';

describe('SubgameremovedPage', () => {
  let component: SubgameremovedPage;
  let fixture: ComponentFixture<SubgameremovedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubgameremovedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
