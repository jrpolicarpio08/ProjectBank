import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubgameremovedPageRoutingModule } from './subgameremoved-routing.module';

import { SubgameremovedPage } from './subgameremoved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubgameremovedPageRoutingModule
  ],
  declarations: [SubgameremovedPage]
})
export class SubgameremovedPageModule {}
