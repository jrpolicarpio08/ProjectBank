import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubvideoPage } from './subvideo.page';

describe('SubvideoPage', () => {
  let component: SubvideoPage;
  let fixture: ComponentFixture<SubvideoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubvideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
