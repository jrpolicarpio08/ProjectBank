import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MeralcoverifyPage } from '../meralcoverify/meralcoverify.page';

@Component({
  selector: 'app-billspaymeralco',
  templateUrl: './billspaymeralco.page.html',
  styleUrls: ['./billspaymeralco.page.scss'],
})
export class BillspaymeralcoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  meralcoverify(){
    this.modalCtrl.create({
      component: MeralcoverifyPage
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
        window.location.href='/meralcodelete';
      },
    },
  ];

}
