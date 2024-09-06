import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillsaddPageRoutingModule } from './billsadd-routing.module';

import { BillsaddPage } from './billsadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillsaddPageRoutingModule
  ],
  declarations: [BillsaddPage]
})
export class BillsaddPageModule {}
