import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpayfoodPage } from './subpayfood.page';

const routes: Routes = [
  {
    path: '',
    component: SubpayfoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubpayfoodPageRoutingModule {}
