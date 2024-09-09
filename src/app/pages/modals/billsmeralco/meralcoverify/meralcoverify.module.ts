import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeralcoverifyPageRoutingModule } from './meralcoverify-routing.module';

import { MeralcoverifyPage } from './meralcoverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeralcoverifyPageRoutingModule
  ],
  declarations: [MeralcoverifyPage]
})
export class MeralcoverifyPageModule {}
