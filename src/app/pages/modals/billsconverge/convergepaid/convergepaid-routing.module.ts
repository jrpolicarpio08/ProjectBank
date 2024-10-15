import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvergepaidPage } from './convergepaid.page';

const routes: Routes = [
  {
    path: '',
    component: ConvergepaidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvergepaidPageRoutingModule {}
