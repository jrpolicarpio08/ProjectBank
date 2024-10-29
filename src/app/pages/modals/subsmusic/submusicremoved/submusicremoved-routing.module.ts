import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmusicremovedPage } from './submusicremoved.page';

const routes: Routes = [
  {
    path: '',
    component: SubmusicremovedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmusicremovedPageRoutingModule {}
