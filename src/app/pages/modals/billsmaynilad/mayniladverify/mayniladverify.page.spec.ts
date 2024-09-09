import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MayniladverifyPage } from './mayniladverify.page';

describe('MayniladverifyPage', () => {
  let component: MayniladverifyPage;
  let fixture: ComponentFixture<MayniladverifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MayniladverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
