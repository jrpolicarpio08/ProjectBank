import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhealthreceiptPage } from './phealthreceipt.page';

const routes: Routes = [
  {
    path: '',
    component: PhealthreceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhealthreceiptPageRoutingModule {}
