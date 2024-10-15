import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanhousePage } from './loanhouse.page';

const routes: Routes = [
  {
    path: '',
    component: LoanhousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanhousePageRoutingModule {}
