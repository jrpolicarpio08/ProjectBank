import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbillsuccessPageRoutingModule } from './addbillsuccess-routing.module';

import { AddbillsuccessPage } from './addbillsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbillsuccessPageRoutingModule
  ],
  declarations: [AddbillsuccessPage]
})
export class AddbillsuccessPageModule {}
