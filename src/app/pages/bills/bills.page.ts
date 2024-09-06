import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BillspaymeralcoPage } from '../modals/billspaymeralco/billspaymeralco.page';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {

  type: string = 'all';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  paymeralco(){
    this.modalCtrl.create({
      component: BillspaymeralcoPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
