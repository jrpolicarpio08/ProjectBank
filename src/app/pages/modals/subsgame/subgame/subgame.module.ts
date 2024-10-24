import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubgamePageRoutingModule } from './subgame-routing.module';

import { SubgamePage } from './subgame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubgamePageRoutingModule
  ],
  declarations: [SubgamePage]
})
export class SubgamePageModule {}
