import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillspayconvergePage } from './billspayconverge.page';

const routes: Routes = [
  {
    path: '',
    component: BillspayconvergePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillspayconvergePageRoutingModule {}
