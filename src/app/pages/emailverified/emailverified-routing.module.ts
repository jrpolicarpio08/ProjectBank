import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailverifiedPage } from './emailverified.page';

const routes: Routes = [
  {
    path: '',
    component: EmailverifiedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailverifiedPageRoutingModule {}
