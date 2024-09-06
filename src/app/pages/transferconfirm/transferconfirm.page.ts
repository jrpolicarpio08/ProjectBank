import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VerifytransferPage } from '../modals/verifytransfer/verifytransfer.page';

@Component({
  selector: 'app-transferconfirm',
  templateUrl: './transferconfirm.page.html',
  styleUrls: ['./transferconfirm.page.scss'],
})
export class TransferconfirmPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  verifytransfer(){
    this.modalCtrl.create({
      component: VerifytransferPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
