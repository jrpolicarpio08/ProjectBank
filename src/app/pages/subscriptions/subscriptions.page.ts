import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SubgamePage } from '../modals/subsgame/subgame/subgame.page';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})
export class SubscriptionsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  viewsubgame(){
    this.modalCtrl.create({
      component: SubgamePage
    }).then(modalres => {
      modalres.present();
    })
  }

}
