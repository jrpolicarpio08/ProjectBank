import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangepasswordsuccessPage } from './changepasswordsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: ChangepasswordsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangepasswordsuccessPageRoutingModule {}
