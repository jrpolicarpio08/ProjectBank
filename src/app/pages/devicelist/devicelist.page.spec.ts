import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevicelistPage } from './devicelist.page';

describe('DevicelistPage', () => {
  let component: DevicelistPage;
  let fixture: ComponentFixture<DevicelistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DevicelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
