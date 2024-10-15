import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvergepaidPageRoutingModule } from './convergepaid-routing.module';

import { ConvergepaidPage } from './convergepaid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvergepaidPageRoutingModule
  ],
  declarations: [ConvergepaidPage]
})
export class ConvergepaidPageModule {}
