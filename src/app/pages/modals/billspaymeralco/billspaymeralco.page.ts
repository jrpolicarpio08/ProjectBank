import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-billspaymeralco',
  templateUrl: './billspaymeralco.page.html',
  styleUrls: ['./billspaymeralco.page.scss'],
})
export class BillspaymeralcoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }


}
