import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeralcodeletePage } from './meralcodelete.page';

const routes: Routes = [
  {
    path: '',
    component: MeralcodeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeralcodeletePageRoutingModule {}
