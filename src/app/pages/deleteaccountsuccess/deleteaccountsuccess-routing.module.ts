import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteaccountsuccessPage } from './deleteaccountsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteaccountsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteaccountsuccessPageRoutingModule {}
