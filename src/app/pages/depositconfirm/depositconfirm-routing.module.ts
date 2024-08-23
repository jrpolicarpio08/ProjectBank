import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositconfirmPage } from './depositconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: DepositconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositconfirmPageRoutingModule {}
