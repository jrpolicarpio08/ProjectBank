import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanhouseverifyPageRoutingModule } from './loanhouseverify-routing.module';

import { LoanhouseverifyPage } from './loanhouseverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanhouseverifyPageRoutingModule
  ],
  declarations: [LoanhouseverifyPage]
})
export class LoanhouseverifyPageModule {}
