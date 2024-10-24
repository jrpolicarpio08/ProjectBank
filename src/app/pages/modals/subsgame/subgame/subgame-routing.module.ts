import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubgamePage } from './subgame.page';

const routes: Routes = [
  {
    path: '',
    component: SubgamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubgamePageRoutingModule {}
