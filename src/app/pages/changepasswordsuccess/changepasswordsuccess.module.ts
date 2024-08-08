import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangepasswordsuccessPageRoutingModule } from './changepasswordsuccess-routing.module';

import { ChangepasswordsuccessPage } from './changepasswordsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangepasswordsuccessPageRoutingModule
  ],
  declarations: [ChangepasswordsuccessPage]
})
export class ChangepasswordsuccessPageModule {}
