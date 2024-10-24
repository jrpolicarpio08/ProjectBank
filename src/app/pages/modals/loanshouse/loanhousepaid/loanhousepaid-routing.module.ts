import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanhousepaidPage } from './loanhousepaid.page';

const routes: Routes = [
  {
    path: '',
    component: LoanhousepaidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanhousepaidPageRoutingModule {}
