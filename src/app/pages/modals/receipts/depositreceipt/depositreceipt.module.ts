import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositreceiptPageRoutingModule } from './depositreceipt-routing.module';

import { DepositreceiptPage } from './depositreceipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositreceiptPageRoutingModule
  ],
  declarations: [DepositreceiptPage]
})
export class DepositreceiptPageModule {}
