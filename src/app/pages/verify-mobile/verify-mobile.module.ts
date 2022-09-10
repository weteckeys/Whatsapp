import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyMobilePageRoutingModule } from './verify-mobile-routing.module';

import { VerifyMobilePage } from './verify-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyMobilePageRoutingModule
  ],
  declarations: [VerifyMobilePage]
})
export class VerifyMobilePageModule {}
