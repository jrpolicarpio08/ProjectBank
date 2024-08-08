import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditprofilePage } from '../editprofile/editprofile.page';
import { ChangepasswordPage } from '../changepassword/changepassword.page';
import { DeleteaccountPage } from '../deleteaccount/deleteaccount.page';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage{
  
  constructor(private modalCtrl: ModalController) {}

  edit(){
    this.modalCtrl.create({
      component: EditprofilePage
    }).then(modalres => {
      modalres.present();
    })
  }
  
  changepass(){
    this.modalCtrl.create({
      component: ChangepasswordPage
    }).then(modalres => {
      modalres.present();
    })
  }

  deleteacc(){
    this.modalCtrl.create({
      component: DeleteaccountPage
    }).then(modalres => {
      modalres.present();
    })
  }
  
}
