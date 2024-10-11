import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcardsuccessPage } from './addcardsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: AddcardsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcardsuccessPageRoutingModule {}
