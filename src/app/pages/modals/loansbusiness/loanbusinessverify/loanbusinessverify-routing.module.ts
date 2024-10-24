import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanbusinessverifyPage } from './loanbusinessverify.page';

const routes: Routes = [
  {
    path: '',
    component: LoanbusinessverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanbusinessverifyPageRoutingModule {}
