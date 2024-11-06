import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferreceiptPageRoutingModule } from './transferreceipt-routing.module';

import { TransferreceiptPage } from './transferreceipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferreceiptPageRoutingModule
  ],
  declarations: [TransferreceiptPage]
})
export class TransferreceiptPageModule {}
