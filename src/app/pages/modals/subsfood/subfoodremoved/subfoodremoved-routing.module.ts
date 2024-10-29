import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubfoodremovedPage } from './subfoodremoved.page';

const routes: Routes = [
  {
    path: '',
    component: SubfoodremovedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubfoodremovedPageRoutingModule {}
