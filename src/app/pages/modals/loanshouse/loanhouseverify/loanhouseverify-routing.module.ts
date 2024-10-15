import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanhouseverifyPage } from './loanhouseverify.page';

const routes: Routes = [
  {
    path: '',
    component: LoanhouseverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanhouseverifyPageRoutingModule {}
