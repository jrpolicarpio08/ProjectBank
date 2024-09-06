import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifytransferPageRoutingModule } from './verifytransfer-routing.module';

import { VerifytransferPage } from './verifytransfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifytransferPageRoutingModule
  ],
  declarations: [VerifytransferPage]
})
export class VerifytransferPageModule {}
