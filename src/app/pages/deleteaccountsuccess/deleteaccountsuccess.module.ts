import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteaccountsuccessPageRoutingModule } from './deleteaccountsuccess-routing.module';

import { DeleteaccountsuccessPage } from './deleteaccountsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteaccountsuccessPageRoutingModule
  ],
  declarations: [DeleteaccountsuccessPage]
})
export class DeleteaccountsuccessPageModule {}
