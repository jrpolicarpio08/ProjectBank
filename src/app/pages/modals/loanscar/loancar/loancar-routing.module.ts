import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoancarPage } from './loancar.page';

const routes: Routes = [
  {
    path: '',
    component: LoancarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoancarPageRoutingModule {}
