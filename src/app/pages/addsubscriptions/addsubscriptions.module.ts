import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsubscriptionsPageRoutingModule } from './addsubscriptions-routing.module';

import { AddsubscriptionsPage } from './addsubscriptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddsubscriptionsPageRoutingModule
  ],
  declarations: [AddsubscriptionsPage]
})
export class AddsubscriptionsPageModule {}
