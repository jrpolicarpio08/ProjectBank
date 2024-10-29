import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsubscriptionsuccessPage } from './addsubscriptionsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: AddsubscriptionsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsubscriptionsuccessPageRoutingModule {}
