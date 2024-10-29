import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubgameverifyPageRoutingModule } from './subgameverify-routing.module';

import { SubgameverifyPage } from './subgameverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubgameverifyPageRoutingModule
  ],
  declarations: [SubgameverifyPage]
})
export class SubgameverifyPageModule {}
