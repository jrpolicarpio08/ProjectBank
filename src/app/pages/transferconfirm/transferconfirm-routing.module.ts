import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferconfirmPage } from './transferconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: TransferconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferconfirmPageRoutingModule {}
