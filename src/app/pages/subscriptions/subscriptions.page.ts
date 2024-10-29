import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SubgamePage } from '../modals/subsgame/subgame/subgame.page';
import { SubvideoPage } from '../modals/subsvideo/subvideo/subvideo.page';
import { SubfoodPage } from '../modals/subsfood/subfood/subfood.page';
import { SubmusicPage } from '../modals/subsmusic/submusic/submusic.page';

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

  viewsubvideo(){
    this.modalCtrl.create({
      component: SubvideoPage
    }).then(modalres => {
      modalres.present();
    })
  }

  viewsubfood(){
    this.modalCtrl.create({
      component: SubfoodPage
    }).then(modalres => {
      modalres.present();
    })
  }

  
  viewsubmusic(){
    this.modalCtrl.create({
      component: SubmusicPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
