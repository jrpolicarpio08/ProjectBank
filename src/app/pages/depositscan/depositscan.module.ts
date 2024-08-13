import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositscanPageRoutingModule } from './depositscan-routing.module';

import { DepositscanPage } from './depositscan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositscanPageRoutingModule
  ],
  declarations: [DepositscanPage]
})
export class DepositscanPageModule {}
