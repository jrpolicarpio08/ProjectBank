import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeralcoverifyPage } from './meralcoverify.page';

const routes: Routes = [
  {
    path: '',
    component: MeralcoverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeralcoverifyPageRoutingModule {}
