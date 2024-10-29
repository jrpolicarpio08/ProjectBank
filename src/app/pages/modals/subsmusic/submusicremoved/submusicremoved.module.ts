import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmusicremovedPageRoutingModule } from './submusicremoved-routing.module';

import { SubmusicremovedPage } from './submusicremoved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmusicremovedPageRoutingModule
  ],
  declarations: [SubmusicremovedPage]
})
export class SubmusicremovedPageModule {}
