import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubvideoPageRoutingModule } from './subvideo-routing.module';

import { SubvideoPage } from './subvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubvideoPageRoutingModule
  ],
  declarations: [SubvideoPage]
})
export class SubvideoPageModule {}
