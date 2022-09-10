import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusViewerPageRoutingModule } from './status-viewer-routing.module';

import { StatusViewerPage } from './status-viewer.page';
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
    ComponentsModule,
    StatusViewerPageRoutingModule
  ],
  declarations: [StatusViewerPage]
})
export class StatusViewerPageModule {}
