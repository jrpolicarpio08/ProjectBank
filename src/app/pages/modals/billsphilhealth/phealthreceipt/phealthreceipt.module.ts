import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhealthreceiptPageRoutingModule } from './phealthreceipt-routing.module';

import { PhealthreceiptPage } from './phealthreceipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhealthreceiptPageRoutingModule
  ],
  declarations: [PhealthreceiptPage]
})
export class PhealthreceiptPageModule {}
