import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubfoodremovedPageRoutingModule } from './subfoodremoved-routing.module';

import { SubfoodremovedPage } from './subfoodremoved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubfoodremovedPageRoutingModule
  ],
  declarations: [SubfoodremovedPage]
})
export class SubfoodremovedPageModule {}
