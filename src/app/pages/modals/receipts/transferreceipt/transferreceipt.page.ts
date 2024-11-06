import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-transferreceipt',
  templateUrl: './transferreceipt.page.html',
  styleUrls: ['./transferreceipt.page.scss'],
})
export class TransferreceiptPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  
  close(){
    this.modalCtrl.dismiss();
  }


}
