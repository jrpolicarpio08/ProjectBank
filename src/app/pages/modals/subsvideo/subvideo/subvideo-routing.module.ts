import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubvideoPage } from './subvideo.page';

const routes: Routes = [
  {
    path: '',
    component: SubvideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubvideoPageRoutingModule {}
