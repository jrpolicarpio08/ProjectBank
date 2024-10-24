import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoanbusinessverifyPage } from '../loanbusinessverify/loanbusinessverify.page';

@Component({
  selector: 'app-loanbusiness',
  templateUrl: './loanbusiness.page.html',
  styleUrls: ['./loanbusiness.page.scss'],
})
export class LoanbusinessPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  loanbusinesspay(){
    this.modalCtrl.create({
      component: LoanbusinessverifyPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
