import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivesupportPageRoutingModule } from './livesupport-routing.module';

import { LivesupportPage } from './livesupport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivesupportPageRoutingModule
  ],
  declarations: [LivesupportPage]
})
export class LivesupportPageModule {}
