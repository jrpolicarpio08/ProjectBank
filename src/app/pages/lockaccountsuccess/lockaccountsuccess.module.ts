import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LockaccountsuccessPageRoutingModule } from './lockaccountsuccess-routing.module';

import { LockaccountsuccessPage } from './lockaccountsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LockaccountsuccessPageRoutingModule
  ],
  declarations: [LockaccountsuccessPage]
})
export class LockaccountsuccessPageModule {}
