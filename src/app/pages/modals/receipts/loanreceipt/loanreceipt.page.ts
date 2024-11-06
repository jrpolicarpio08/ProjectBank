import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loanreceipt',
  templateUrl: './loanreceipt.page.html',
  styleUrls: ['./loanreceipt.page.scss'],
})
export class LoanreceiptPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
