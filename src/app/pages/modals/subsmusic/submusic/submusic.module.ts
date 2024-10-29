import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmusicPageRoutingModule } from './submusic-routing.module';

import { SubmusicPage } from './submusic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmusicPageRoutingModule
  ],
  declarations: [SubmusicPage]
})
export class SubmusicPageModule {}
