import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanbusinesspaidPage } from './loanbusinesspaid.page';

const routes: Routes = [
  {
    path: '',
    component: LoanbusinesspaidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanbusinesspaidPageRoutingModule {}
