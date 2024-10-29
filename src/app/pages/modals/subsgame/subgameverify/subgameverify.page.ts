import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-subgameverify',
  templateUrl: './subgameverify.page.html',
  styleUrls: ['./subgameverify.page.scss'],
})
export class SubgameverifyPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }


}
