import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsaddcompletePage } from './billsaddcomplete.page';

const routes: Routes = [
  {
    path: '',
    component: BillsaddcompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsaddcompletePageRoutingModule {}
