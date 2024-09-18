import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConvergeverifyPage } from '../convergeverify/convergeverify.page';

@Component({
  selector: 'app-billspayconverge',
  templateUrl: './billspayconverge.page.html',
  styleUrls: ['./billspayconverge.page.scss'],
})
export class BillspayconvergePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  convergeverify(){
    this.modalCtrl.create({
      component: ConvergeverifyPage
    }).then(modalres => {
      modalres.present();
    })
  }

  public alertButtons = [
    {
      text: 'Cancel',
    },
    {
      text: 'Confirm',
      handler: () => {
        window.location.href='/convergedelete';
      },
    },
  ];

}
