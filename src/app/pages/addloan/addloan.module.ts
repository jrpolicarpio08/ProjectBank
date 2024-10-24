import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddloanPageRoutingModule } from './addloan-routing.module';

import { AddloanPage } from './addloan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddloanPageRoutingModule
  ],
  declarations: [AddloanPage]
})
export class AddloanPageModule {}
