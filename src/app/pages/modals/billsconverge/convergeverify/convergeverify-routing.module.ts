import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvergeverifyPage } from './convergeverify.page';

const routes: Routes = [
  {
    path: '',
    component: ConvergeverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvergeverifyPageRoutingModule {}
