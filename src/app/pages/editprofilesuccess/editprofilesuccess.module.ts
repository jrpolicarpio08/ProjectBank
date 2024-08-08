import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprofilesuccessPageRoutingModule } from './editprofilesuccess-routing.module';

import { EditprofilesuccessPage } from './editprofilesuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditprofilesuccessPageRoutingModule
  ],
  declarations: [EditprofilesuccessPage]
})
export class EditprofilesuccessPageModule {}
