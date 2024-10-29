import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubfoodverifyPage } from './subfoodverify.page';

const routes: Routes = [
  {
    path: '',
    component: SubfoodverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubfoodverifyPageRoutingModule {}
