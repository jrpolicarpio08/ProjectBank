import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddloansuccessPage } from './addloansuccess.page';

const routes: Routes = [
  {
    path: '',
    component: AddloansuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddloansuccessPageRoutingModule {}
