import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvergeverifyPageRoutingModule } from './convergeverify-routing.module';

import { ConvergeverifyPage } from './convergeverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvergeverifyPageRoutingModule
  ],
  declarations: [ConvergeverifyPage]
})
export class ConvergeverifyPageModule {}
