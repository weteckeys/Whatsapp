import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchievePageRoutingModule } from './archieve-routing.module';

import { ArchievePage } from './archieve.page';
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
    ArchievePageRoutingModule
  ],
  declarations: [ArchievePage]
})
export class ArchievePageModule {}
