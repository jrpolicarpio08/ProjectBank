import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoancarPageRoutingModule } from './loancar-routing.module';

import { LoancarPage } from './loancar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoancarPageRoutingModule
  ],
  declarations: [LoancarPage]
})
export class LoancarPageModule {}
