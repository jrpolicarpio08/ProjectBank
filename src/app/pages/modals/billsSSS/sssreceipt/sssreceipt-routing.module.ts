import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SssreceiptPage } from './sssreceipt.page';

const routes: Routes = [
  {
    path: '',
    component: SssreceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SssreceiptPageRoutingModule {}
