import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubfoodPage } from './subfood.page';

const routes: Routes = [
  {
    path: '',
    component: SubfoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubfoodPageRoutingModule {}
