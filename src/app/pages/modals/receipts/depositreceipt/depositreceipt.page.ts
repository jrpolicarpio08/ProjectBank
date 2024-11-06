import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-depositreceipt',
  templateUrl: './depositreceipt.page.html',
  styleUrls: ['./depositreceipt.page.scss'],
})
export class DepositreceiptPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }


}
