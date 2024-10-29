import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubgameverifyPage } from './subgameverify.page';

describe('SubgameverifyPage', () => {
  let component: SubgameverifyPage;
  let fixture: ComponentFixture<SubgameverifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubgameverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
