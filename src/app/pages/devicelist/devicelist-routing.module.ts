import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicelistPage } from './devicelist.page';

const routes: Routes = [
  {
    path: '',
    component: DevicelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicelistPageRoutingModule {}
