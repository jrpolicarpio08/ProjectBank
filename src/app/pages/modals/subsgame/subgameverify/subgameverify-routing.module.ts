import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubgameverifyPage } from './subgameverify.page';

const routes: Routes = [
  {
    path: '',
    component: SubgameverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubgameverifyPageRoutingModule {}
