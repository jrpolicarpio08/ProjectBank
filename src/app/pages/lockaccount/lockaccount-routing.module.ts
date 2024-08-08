import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LockaccountPage } from './lockaccount.page';

const routes: Routes = [
  {
    path: '',
    component: LockaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LockaccountPageRoutingModule {}
