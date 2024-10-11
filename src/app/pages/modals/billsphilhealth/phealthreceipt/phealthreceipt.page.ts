import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-phealthreceipt',
  templateUrl: './phealthreceipt.page.html',
  styleUrls: ['./phealthreceipt.page.scss'],
})
export class PhealthreceiptPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
