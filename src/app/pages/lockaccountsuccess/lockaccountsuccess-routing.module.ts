import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LockaccountsuccessPage } from './lockaccountsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: LockaccountsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LockaccountsuccessPageRoutingModule {}
