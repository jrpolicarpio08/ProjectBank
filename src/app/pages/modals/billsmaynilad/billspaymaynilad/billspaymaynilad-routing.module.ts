import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillspaymayniladPage } from './billspaymaynilad.page';

const routes: Routes = [
  {
    path: '',
    component: BillspaymayniladPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillspaymayniladPageRoutingModule {}
