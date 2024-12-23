import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BillspaymeralcoPage } from '../modals/billsmeralco/billspaymeralco/billspaymeralco.page';
import { BillspaymayniladPage } from '../modals/billsmaynilad/billspaymaynilad/billspaymaynilad.page';
import { BillspayconvergePage } from '../modals/billsconverge/billspayconverge/billspayconverge.page';
import { SssreceiptPage } from '../modals/billsSSS/sssreceipt/sssreceipt.page';
import { PhealthreceiptPage } from '../modals/billsphilhealth/phealthreceipt/phealthreceipt.page';

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

  paymaynilad(){
    this.modalCtrl.create({
      component: BillspaymayniladPage
    }).then(modalres => {
      modalres.present();
    })
  }

  payconverge(){
    this.modalCtrl.create({
      component: BillspayconvergePage
    }).then(modalres => {
      modalres.present();
    })
  }

  receiptSSS(){
    this.modalCtrl.create({
      component: SssreceiptPage
    }).then(modalres => {
      modalres.present();
    })
  }

  receiptphealth(){
    this.modalCtrl.create({
      component: PhealthreceiptPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
