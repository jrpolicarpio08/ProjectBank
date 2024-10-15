import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanhousePageRoutingModule } from './loanhouse-routing.module';

import { LoanhousePage } from './loanhouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanhousePageRoutingModule
  ],
  declarations: [LoanhousePage]
})
export class LoanhousePageModule {}
