import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifytransferPage } from './verifytransfer.page';

describe('VerifytransferPage', () => {
  let component: VerifytransferPage;
  let fixture: ComponentFixture<VerifytransferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerifytransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
