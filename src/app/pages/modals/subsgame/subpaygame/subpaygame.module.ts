import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpaygamePageRoutingModule } from './subpaygame-routing.module';

import { SubpaygamePage } from './subpaygame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpaygamePageRoutingModule
  ],
  declarations: [SubpaygamePage]
})
export class SubpaygamePageModule {}
