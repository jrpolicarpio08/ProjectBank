import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailverifiedPageRoutingModule } from './emailverified-routing.module';

import { EmailverifiedPage } from './emailverified.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailverifiedPageRoutingModule
  ],
  declarations: [EmailverifiedPage]
})
export class EmailverifiedPageModule {}
