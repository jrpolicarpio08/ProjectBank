import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LockaccountPageRoutingModule } from './lockaccount-routing.module';

import { LockaccountPage } from './lockaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LockaccountPageRoutingModule
  ],
  declarations: [LockaccountPage]
})
export class LockaccountPageModule {}
