import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@NgModule({
  entryComponents: [
    PopoverComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
