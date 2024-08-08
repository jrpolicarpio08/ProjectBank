import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifytransferPage } from './verifytransfer.page';

const routes: Routes = [
  {
    path: '',
    component: VerifytransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifytransferPageRoutingModule {}
