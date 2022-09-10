import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatSettingsPage } from './chat-settings.page';

describe('ChatSettingsPage', () => {
  let component: ChatSettingsPage;
  let fixture: ComponentFixture<ChatSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
