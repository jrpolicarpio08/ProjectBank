import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

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
      text: 'Dismiss',
      handler: () => {
        this.modalCtrl.dismiss();
      },
    },
  ];


}
