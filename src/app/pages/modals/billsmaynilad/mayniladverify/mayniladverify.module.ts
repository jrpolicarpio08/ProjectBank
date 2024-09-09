import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayniladverifyPageRoutingModule } from './mayniladverify-routing.module';

import { MayniladverifyPage } from './mayniladverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayniladverifyPageRoutingModule
  ],
  declarations: [MayniladverifyPage]
})
export class MayniladverifyPageModule {}
