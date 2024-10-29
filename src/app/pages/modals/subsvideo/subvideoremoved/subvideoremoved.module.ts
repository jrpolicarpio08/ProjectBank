import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubvideoremovedPageRoutingModule } from './subvideoremoved-routing.module';

import { SubvideoremovedPage } from './subvideoremoved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubvideoremovedPageRoutingModule
  ],
  declarations: [SubvideoremovedPage]
})
export class SubvideoremovedPageModule {}
