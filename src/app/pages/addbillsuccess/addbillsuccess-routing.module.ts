import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbillsuccessPage } from './addbillsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: AddbillsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbillsuccessPageRoutingModule {}
