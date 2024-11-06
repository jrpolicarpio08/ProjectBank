import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferreceiptPage } from './transferreceipt.page';

const routes: Routes = [
  {
    path: '',
    component: TransferreceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferreceiptPageRoutingModule {}
