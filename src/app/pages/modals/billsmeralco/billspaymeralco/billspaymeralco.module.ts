import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillspaymeralcoPageRoutingModule } from './billspaymeralco-routing.module';

import { BillspaymeralcoPage } from './billspaymeralco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillspaymeralcoPageRoutingModule
  ],
  declarations: [BillspaymeralcoPage]
})
export class BillspaymeralcoPageModule {}
