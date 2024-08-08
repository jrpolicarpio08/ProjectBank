import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LockaccountPage } from '../lockaccount/lockaccount.page';
import { LivesupportPage } from '../livesupport/livesupport.page';


@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  type: string = 'all';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  lockacc(){
    this.modalCtrl.create({
      component: LockaccountPage
    }).then(modalres => {
      modalres.present();
    })
  }

  livesupp(){
    this.modalCtrl.create({
      component: LivesupportPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
