import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MayniladdeletePage } from './mayniladdelete.page';

describe('MayniladdeletePage', () => {
  let component: MayniladdeletePage;
  let fixture: ComponentFixture<MayniladdeletePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MayniladdeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
