import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositconfirmPageRoutingModule } from './depositconfirm-routing.module';

import { DepositconfirmPage } from './depositconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositconfirmPageRoutingModule
  ],
  declarations: [DepositconfirmPage]
})
export class DepositconfirmPageModule {}
