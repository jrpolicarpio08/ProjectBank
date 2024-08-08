import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lockaccount',
  templateUrl: './lockaccount.page.html',
  styleUrls: ['./lockaccount.page.scss'],
})
export class LockaccountPage implements OnInit {

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

  public alertButtons1 = [
    {
      text: 'Cancel',
    },
    {
      text: 'Confirm',
      handler: () => {
        window.location.href='/lockaccountsuccess';
      },
    },
  ];

 public alertInputs = [
    {
      type: 'password',
      placeholder: 'password',
      value: 'JD123'
    }
  ];
}
