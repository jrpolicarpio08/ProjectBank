import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositverifyPage } from './depositverify.page';

const routes: Routes = [
  {
    path: '',
    component: DepositverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositverifyPageRoutingModule {}
