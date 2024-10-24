import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbillsPage } from './addbills.page';

const routes: Routes = [
  {
    path: '',
    component: AddbillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbillsPageRoutingModule {}
