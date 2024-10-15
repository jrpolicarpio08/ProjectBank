import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanbusinessPageRoutingModule } from './loanbusiness-routing.module';

import { LoanbusinessPage } from './loanbusiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanbusinessPageRoutingModule
  ],
  declarations: [LoanbusinessPage]
})
export class LoanbusinessPageModule {}
