import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

}
