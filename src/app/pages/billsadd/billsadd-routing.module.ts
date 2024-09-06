import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsaddPage } from './billsadd.page';

const routes: Routes = [
  {
    path: '',
    component: BillsaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsaddPageRoutingModule {}
