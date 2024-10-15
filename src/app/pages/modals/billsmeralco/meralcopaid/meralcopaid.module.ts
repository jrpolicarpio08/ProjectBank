import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeralcopaidPageRoutingModule } from './meralcopaid-routing.module';

import { MeralcopaidPage } from './meralcopaid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeralcopaidPageRoutingModule
  ],
  declarations: [MeralcopaidPage]
})
export class MeralcopaidPageModule {}
