import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddloanPage } from './addloan.page';

const routes: Routes = [
  {
    path: '',
    component: AddloanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddloanPageRoutingModule {}
