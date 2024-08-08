import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountlimitsPage } from './accountlimits.page';

const routes: Routes = [
  {
    path: '',
    component: AccountlimitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountlimitsPageRoutingModule {}
