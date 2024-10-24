import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanbusinesspaidPageRoutingModule } from './loanbusinesspaid-routing.module';

import { LoanbusinesspaidPage } from './loanbusinesspaid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanbusinesspaidPageRoutingModule
  ],
  declarations: [LoanbusinesspaidPage]
})
export class LoanbusinesspaidPageModule {}
