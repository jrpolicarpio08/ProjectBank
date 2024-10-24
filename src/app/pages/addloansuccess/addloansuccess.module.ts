import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddloansuccessPageRoutingModule } from './addloansuccess-routing.module';

import { AddloansuccessPage } from './addloansuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddloansuccessPageRoutingModule
  ],
  declarations: [AddloansuccessPage]
})
export class AddloansuccessPageModule {}
