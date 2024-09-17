import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayniladdeletePageRoutingModule } from './mayniladdelete-routing.module';

import { MayniladdeletePage } from './mayniladdelete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayniladdeletePageRoutingModule
  ],
  declarations: [MayniladdeletePage]
})
export class MayniladdeletePageModule {}
