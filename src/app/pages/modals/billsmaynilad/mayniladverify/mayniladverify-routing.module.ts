import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MayniladverifyPage } from './mayniladverify.page';

const routes: Routes = [
  {
    path: '',
    component: MayniladverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayniladverifyPageRoutingModule {}
