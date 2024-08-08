import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferconfirmPageRoutingModule } from './transferconfirm-routing.module';

import { TransferconfirmPage } from './transferconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferconfirmPageRoutingModule
  ],
  declarations: [TransferconfirmPage]
})
export class TransferconfirmPageModule {}
