import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivesupportPage } from './livesupport.page';

describe('LivesupportPage', () => {
  let component: LivesupportPage;
  let fixture: ComponentFixture<LivesupportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LivesupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
