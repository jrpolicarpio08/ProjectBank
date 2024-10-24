import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoancollegePageRoutingModule } from './loancollege-routing.module';

import { LoancollegePage } from './loancollege.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoancollegePageRoutingModule
  ],
  declarations: [LoancollegePage]
})
export class LoancollegePageModule {}
