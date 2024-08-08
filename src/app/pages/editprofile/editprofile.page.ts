import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeleteaccountPage } from '../deleteaccount/deleteaccount.page';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  public alertButtons = [
    {
      text: 'Cancel',
    },
    {
      text: 'Confirm',
      handler: () => {
        this.modalCtrl.dismiss();
      },
    },
  ];
}
