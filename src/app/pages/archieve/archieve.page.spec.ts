import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArchievePage } from './archieve.page';

describe('ArchievePage', () => {
  let component: ArchievePage;
  let fixture: ComponentFixture<ArchievePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchievePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArchievePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
