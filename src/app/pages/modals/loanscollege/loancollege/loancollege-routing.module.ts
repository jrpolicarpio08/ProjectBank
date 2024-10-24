import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoancollegePage } from './loancollege.page';

const routes: Routes = [
  {
    path: '',
    component: LoancollegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoancollegePageRoutingModule {}
