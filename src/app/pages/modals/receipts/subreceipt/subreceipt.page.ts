import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-subreceipt',
  templateUrl: './subreceipt.page.html',
  styleUrls: ['./subreceipt.page.scss'],
})
export class SubreceiptPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
