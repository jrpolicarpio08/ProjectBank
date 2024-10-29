import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubfoodverifyPageRoutingModule } from './subfoodverify-routing.module';

import { SubfoodverifyPage } from './subfoodverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubfoodverifyPageRoutingModule
  ],
  declarations: [SubfoodverifyPage]
})
export class SubfoodverifyPageModule {}
