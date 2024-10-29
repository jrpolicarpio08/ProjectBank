import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpayfoodPageRoutingModule } from './subpayfood-routing.module';

import { SubpayfoodPage } from './subpayfood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpayfoodPageRoutingModule
  ],
  declarations: [SubpayfoodPage]
})
export class SubpayfoodPageModule {}
