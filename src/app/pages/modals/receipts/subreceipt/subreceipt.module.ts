import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubreceiptPageRoutingModule } from './subreceipt-routing.module';

import { SubreceiptPage } from './subreceipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubreceiptPageRoutingModule
  ],
  declarations: [SubreceiptPage]
})
export class SubreceiptPageModule {}
