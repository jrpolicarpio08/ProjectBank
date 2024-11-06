import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanreceiptPageRoutingModule } from './loanreceipt-routing.module';

import { LoanreceiptPage } from './loanreceipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanreceiptPageRoutingModule
  ],
  declarations: [LoanreceiptPage]
})
export class LoanreceiptPageModule {}
