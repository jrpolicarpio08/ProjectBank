import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeralcopaidPage } from './meralcopaid.page';

const routes: Routes = [
  {
    path: '',
    component: MeralcopaidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeralcopaidPageRoutingModule {}
