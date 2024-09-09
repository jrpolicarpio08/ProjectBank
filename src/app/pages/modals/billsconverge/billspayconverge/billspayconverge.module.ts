import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillspayconvergePageRoutingModule } from './billspayconverge-routing.module';

import { BillspayconvergePage } from './billspayconverge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillspayconvergePageRoutingModule
  ],
  declarations: [BillspayconvergePage]
})
export class BillspayconvergePageModule {}
