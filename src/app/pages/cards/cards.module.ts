import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsPageRoutingModule } from './cards-routing.module';

import { CardsPage } from './cards.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsPageRoutingModule
  ],
  declarations: [CardsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardsPageModule {}
