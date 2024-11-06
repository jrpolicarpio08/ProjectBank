import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhealthreceiptPage } from '../modals/billsphilhealth/phealthreceipt/phealthreceipt.page';
import { LoanreceiptPage } from '../modals/receipts/loanreceipt/loanreceipt.page';
import { TransferreceiptPage } from '../modals/receipts/transferreceipt/transferreceipt.page';
import { DepositreceiptPage } from '../modals/receipts/depositreceipt/depositreceipt.page';
import { SubreceiptPage } from '../modals/receipts/subreceipt/subreceipt.page';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

 receiptbill(){
    this.modalCtrl.create({
      component: PhealthreceiptPage
    }).then(modalres => {
      modalres.present();
    })
  }
  
  receiptloan(){
    this.modalCtrl.create({
      component: LoanreceiptPage
    }).then(modalres => {
      modalres.present();
    })
  }

  receipttransfer(){
    this.modalCtrl.create({
      component: TransferreceiptPage
    }).then(modalres => {
      modalres.present();
    })
  }
  
  receiptdeposit(){
    this.modalCtrl.create({
      component: DepositreceiptPage
    }).then(modalres => {
      modalres.present();
    })
  }

  receiptsub(){
    this.modalCtrl.create({
      component: SubreceiptPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
