import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SubgameverifyPage } from '../subgameverify/subgameverify.page';

@Component({
  selector: 'app-subpaygame',
  templateUrl: './subpaygame.page.html',
  styleUrls: ['./subpaygame.page.scss'],
})
export class SubpaygamePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  
  close(){
    this.modalCtrl.dismiss();
  }

  subpayverify(){
    this.modalCtrl.create({
      component: SubgameverifyPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
