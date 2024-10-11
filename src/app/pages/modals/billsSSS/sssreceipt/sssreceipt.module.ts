import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SssreceiptPageRoutingModule } from './sssreceipt-routing.module';

import { SssreceiptPage } from './sssreceipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SssreceiptPageRoutingModule
  ],
  declarations: [SssreceiptPage]
})
export class SssreceiptPageModule {}
