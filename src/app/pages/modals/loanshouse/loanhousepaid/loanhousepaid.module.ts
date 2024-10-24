import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanhousepaidPageRoutingModule } from './loanhousepaid-routing.module';

import { LoanhousepaidPage } from './loanhousepaid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanhousepaidPageRoutingModule
  ],
  declarations: [LoanhousepaidPage]
})
export class LoanhousepaidPageModule {}
