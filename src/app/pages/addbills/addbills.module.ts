import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbillsPageRoutingModule } from './addbills-routing.module';

import { AddbillsPage } from './addbills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbillsPageRoutingModule
  ],
  declarations: [AddbillsPage]
})
export class AddbillsPageModule {}
