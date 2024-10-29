import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmusicPage } from './submusic.page';

const routes: Routes = [
  {
    path: '',
    component: SubmusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmusicPageRoutingModule {}
