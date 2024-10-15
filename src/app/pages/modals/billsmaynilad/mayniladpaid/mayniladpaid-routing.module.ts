import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MayniladpaidPage } from './mayniladpaid.page';

const routes: Routes = [
  {
    path: '',
    component: MayniladpaidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayniladpaidPageRoutingModule {}
