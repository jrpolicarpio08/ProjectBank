import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayniladpaidPageRoutingModule } from './mayniladpaid-routing.module';

import { MayniladpaidPage } from './mayniladpaid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayniladpaidPageRoutingModule
  ],
  declarations: [MayniladpaidPage]
})
export class MayniladpaidPageModule {}
