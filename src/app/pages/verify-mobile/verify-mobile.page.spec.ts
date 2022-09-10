import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyMobilePage } from './verify-mobile.page';

describe('VerifyMobilePage', () => {
  let component: VerifyMobilePage;
  let fixture: ComponentFixture<VerifyMobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyMobilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
