import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositverifyPageRoutingModule } from './depositverify-routing.module';

import { DepositverifyPage } from './depositverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositverifyPageRoutingModule
  ],
  declarations: [DepositverifyPage]
})
export class DepositverifyPageModule {}
