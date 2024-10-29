import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubvideoremovedPage } from './subvideoremoved.page';

const routes: Routes = [
  {
    path: '',
    component: SubvideoremovedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubvideoremovedPageRoutingModule {}
