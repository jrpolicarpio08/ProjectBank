import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpaygamePage } from './subpaygame.page';

const routes: Routes = [
  {
    path: '',
    component: SubpaygamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubpaygamePageRoutingModule {}
