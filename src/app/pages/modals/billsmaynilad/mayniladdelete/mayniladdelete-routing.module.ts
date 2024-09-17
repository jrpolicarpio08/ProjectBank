import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MayniladdeletePage } from './mayniladdelete.page';

const routes: Routes = [
  {
    path: '',
    component: MayniladdeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayniladdeletePageRoutingModule {}
