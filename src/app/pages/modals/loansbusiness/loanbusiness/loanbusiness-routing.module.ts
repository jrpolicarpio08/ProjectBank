import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanbusinessPage } from './loanbusiness.page';

const routes: Routes = [
  {
    path: '',
    component: LoanbusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanbusinessPageRoutingModule {}
