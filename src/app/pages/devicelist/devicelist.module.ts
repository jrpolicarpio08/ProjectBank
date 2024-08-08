import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicelistPageRoutingModule } from './devicelist-routing.module';

import { DevicelistPage } from './devicelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicelistPageRoutingModule
  ],
  declarations: [DevicelistPage]
})
export class DevicelistPageModule {}
