import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvergedeletePage } from './convergedelete.page';

const routes: Routes = [
  {
    path: '',
    component: ConvergedeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvergedeletePageRoutingModule {}
