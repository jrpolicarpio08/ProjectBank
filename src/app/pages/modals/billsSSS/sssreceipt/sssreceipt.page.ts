import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sssreceipt',
  templateUrl: './sssreceipt.page.html',
  styleUrls: ['./sssreceipt.page.scss'],
})
export class SssreceiptPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }


}
