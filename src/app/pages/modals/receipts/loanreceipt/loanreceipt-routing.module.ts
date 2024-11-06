import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanreceiptPage } from './loanreceipt.page';

const routes: Routes = [
  {
    path: '',
    component: LoanreceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanreceiptPageRoutingModule {}
