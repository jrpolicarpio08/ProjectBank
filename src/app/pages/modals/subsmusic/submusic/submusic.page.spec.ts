import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmusicPage } from './submusic.page';

describe('SubmusicPage', () => {
  let component: SubmusicPage;
  let fixture: ComponentFixture<SubmusicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubmusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
