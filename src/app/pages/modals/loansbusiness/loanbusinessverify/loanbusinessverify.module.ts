import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanbusinessverifyPageRoutingModule } from './loanbusinessverify-routing.module';

import { LoanbusinessverifyPage } from './loanbusinessverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanbusinessverifyPageRoutingModule
  ],
  declarations: [LoanbusinessverifyPage]
})
export class LoanbusinessverifyPageModule {}
