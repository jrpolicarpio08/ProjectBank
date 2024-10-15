import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConvergepaidPage } from '../convergepaid/convergepaid.page';

@Component({
  selector: 'app-convergeverify',
  templateUrl: './convergeverify.page.html',
  styleUrls: ['./convergeverify.page.scss'],
})
export class ConvergeverifyPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  billpaidconverge(){
    this.modalCtrl.create({
      component: ConvergepaidPage
    }).then(modalres => {
      modalres.present();
    })
  }
}
