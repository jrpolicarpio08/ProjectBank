import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoanhouseverifyPage } from '../loanhouseverify/loanhouseverify.page';

@Component({
  selector: 'app-loanhouse',
  templateUrl: './loanhouse.page.html',
  styleUrls: ['./loanhouse.page.scss'],
})
export class LoanhousePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  loanhousepay(){
    this.modalCtrl.create({
      component: LoanhouseverifyPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
