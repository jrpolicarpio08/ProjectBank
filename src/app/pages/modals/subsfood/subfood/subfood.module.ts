import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubfoodPageRoutingModule } from './subfood-routing.module';

import { SubfoodPage } from './subfood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubfoodPageRoutingModule
  ],
  declarations: [SubfoodPage]
})
export class SubfoodPageModule {}
