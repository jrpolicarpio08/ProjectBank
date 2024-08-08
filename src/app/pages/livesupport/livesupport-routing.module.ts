import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivesupportPage } from './livesupport.page';

const routes: Routes = [
  {
    path: '',
    component: LivesupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivesupportPageRoutingModule {}
