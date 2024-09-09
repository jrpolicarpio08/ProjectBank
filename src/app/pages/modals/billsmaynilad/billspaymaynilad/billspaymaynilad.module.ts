import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillspaymayniladPageRoutingModule } from './billspaymaynilad-routing.module';

import { BillspaymayniladPage } from './billspaymaynilad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillspaymayniladPageRoutingModule
  ],
  declarations: [BillspaymayniladPage]
})
export class BillspaymayniladPageModule {}
