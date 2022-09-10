import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectContactPage } from './select-contact.page';

describe('SelectContactPage', () => {
  let component: SelectContactPage;
  let fixture: ComponentFixture<SelectContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
