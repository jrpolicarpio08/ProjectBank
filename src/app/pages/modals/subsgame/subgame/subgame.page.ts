import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SubpaygamePage } from '../subpaygame/subpaygame.page';

@Component({
  selector: 'app-subgame',
  templateUrl: './subgame.page.html',
  styleUrls: ['./subgame.page.scss'],
})
export class SubgamePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  type: string = 'all';

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  subgame(){
    this.modalCtrl.create({
      component: SubpaygamePage
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
        window.location.href='/subgameremoved';
      },
    },
  ];
  
}
