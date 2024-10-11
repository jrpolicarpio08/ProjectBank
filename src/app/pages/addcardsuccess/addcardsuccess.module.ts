import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcardsuccessPageRoutingModule } from './addcardsuccess-routing.module';

import { AddcardsuccessPage } from './addcardsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcardsuccessPageRoutingModule
  ],
  declarations: [AddcardsuccessPage]
})
export class AddcardsuccessPageModule {}
