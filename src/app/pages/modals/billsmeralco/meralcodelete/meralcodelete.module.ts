import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeralcodeletePageRoutingModule } from './meralcodelete-routing.module';

import { MeralcodeletePage } from './meralcodelete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeralcodeletePageRoutingModule
  ],
  declarations: [MeralcodeletePage]
})
export class MeralcodeletePageModule {}
