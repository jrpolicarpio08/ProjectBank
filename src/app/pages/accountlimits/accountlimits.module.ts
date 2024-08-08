import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountlimitsPageRoutingModule } from './accountlimits-routing.module';

import { AccountlimitsPage } from './accountlimits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountlimitsPageRoutingModule
  ],
  declarations: [AccountlimitsPage]
})
export class AccountlimitsPageModule {}
