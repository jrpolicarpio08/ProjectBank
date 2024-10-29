import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SubfoodverifyPage } from '../subfoodverify/subfoodverify.page';

@Component({
  selector: 'app-subpayfood',
  templateUrl: './subpayfood.page.html',
  styleUrls: ['./subpayfood.page.scss'],
})
export class SubpayfoodPage implements OnInit {

  constructor (private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  subpayverify(){
    this.modalCtrl.create({
      component: SubfoodverifyPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
