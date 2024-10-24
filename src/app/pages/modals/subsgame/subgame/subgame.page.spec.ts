import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubgamePage } from './subgame.page';

describe('SubgamePage', () => {
  let component: SubgamePage;
  let fixture: ComponentFixture<SubgamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubgamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
