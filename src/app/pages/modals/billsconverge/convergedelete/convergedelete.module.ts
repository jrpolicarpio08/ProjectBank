import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvergedeletePageRoutingModule } from './convergedelete-routing.module';

import { ConvergedeletePage } from './convergedelete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvergedeletePageRoutingModule
  ],
  declarations: [ConvergedeletePage]
})
export class ConvergedeletePageModule {}
