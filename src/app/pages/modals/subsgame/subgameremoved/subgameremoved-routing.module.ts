import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubgameremovedPage } from './subgameremoved.page';

const routes: Routes = [
  {
    path: '',
    component: SubgameremovedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubgameremovedPageRoutingModule {}
