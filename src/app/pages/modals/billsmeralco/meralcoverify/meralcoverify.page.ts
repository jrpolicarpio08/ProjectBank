import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MeralcopaidPage } from '../meralcopaid/meralcopaid.page';

@Component({
  selector: 'app-meralcoverify',
  templateUrl: './meralcoverify.page.html',
  styleUrls: ['./meralcoverify.page.scss'],
})
export class MeralcoverifyPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  billpaidmeralco(){
    this.modalCtrl.create({
      component: MeralcopaidPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
